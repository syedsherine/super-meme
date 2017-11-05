var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://syedibrahim:irsath25_@ds047792.mlab.com:47792/mytasklist_syed", ["tasks"]);

router.get("/tasks", function(req, res, next) {
    db.tasks.find(function(err, tasks) {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
    
})

router.get("/task/:id", function(req, res, next) {
    db.tasks.findOne({_id:mongojs.ObjectID(req.params.id)}, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

router.post("/task", function(req, res, next) {
    var task = req.body;
    console.log(task);
    if(!task.title) {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task) {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

router.delete("/task/:id", function(req, res, next) {
    db.tasks.remove({_id:mongojs.ObjectID(req.params.id)}, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

router.put("/task/:id", function(req, res, next) {
    var task = req.body;
    var updateTask = {};
    if(task.title) {
        updateTask.title = task.title;
    }
    if(task.isDone) {
        updateTask.isDone = task.isDone;
    }
    if(!updateTask) {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    } else {
        db.tasks.update({_id:mongojs.ObjectID(req.params.id)}, updateTask, {}, function(err, task) {
             if(err) {
            res.send(err);
        }
        res.json(task);
        });
    }
    
});

module.exports = router;