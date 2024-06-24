const express = require('express');
const router = express.Router();

const employees = [];

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.post('/add-employee', (req, res) => {
    const { employeeId, name, role, dateOfJoin } = req.body;
    employees.push({ employeeId, name, role, dateOfJoin });
    res.redirect('/');
});

router.put('/update-employee/:id', (req, res) => {
    const { id } = req.params;
    const { name, role, dateOfJoin } = req.body;
    const employee = employees.find(emp => emp.employeeId === id);
    if (employee) {
        employee.name = name;
        employee.role = role;
        employee.dateOfJoin = dateOfJoin;
    }
    res.redirect('/');
});

router.delete('/delete-employee/:id', (req, res) => {
    const { id } = req.params;
    const index = employees.findIndex(emp => emp.employeeId === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }
    res.redirect('/');
});

router.get('/employees', (req, res) => {
    res.json(employees);
});

module.exports = router;
