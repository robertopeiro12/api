import { pool } from "../db/db.js";




export const getUsers = (req, res) => {
    pool.query('select * from users', (error, results)=> {
        if (error) {
            res.status(500).json({msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK",  users: results });
});
};
export const getUser = (req, res) => {
    pool.query('select * from users', (error, results)=> {
        if (error) {
            res.status(500).json({msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK",  users: results });
});

};
export const postUser = (req, res) => {} ;
export const putUser = (req, res) => {} ;
export const deleteUser = (req, res) => {} ;
export const login = (req, res) => {} ;