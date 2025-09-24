import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database connection
export const db = mysql.createConnection({
    host:  process.env.DB_HOST,
    user:  process.env.DB_USER , 
    password:  process.env.DB_PASSWORD, 
    database:  process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Create Application
export const createApplication = async (req, res) => {
    const application = req.body;
    db.query('INSERT INTO Application SET ?', application, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...application });
    });
};

// Read Applications
export const getApplications= async (req, res) => {
    db.query('SELECT * FROM Application', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

export const getApplicationById = async (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Application WHERE application_id = ?', id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(results[0]);
    });
};

// Update Application
export const updateApplication = async (req, res) => {
    const { id } = req.params;
    const application = req.body;
    db.query('UPDATE Application SET ? WHERE application_id = ?', [application, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id, ...application });
    });
};

// Delete Application
export const deleteApplication = async (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Application WHERE application_id = ?', id, (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
};

export default {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication
};

