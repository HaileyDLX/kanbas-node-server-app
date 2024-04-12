import * as dao from "./dao.js";
import courseModel from "../courses/model.js";
function ModuleRoutes(app) {
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        //await dao.deleteModule(mid);
        // db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);

    });
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const newModule = await dao.createModule(cid, req.body);
        // const newModule = {
        //     ...req.body,
        //     course: cid,
        //     _id: new Date().getTime().toString(),
        // };
        // db.modules.push(newModule);
        res.send(newModule);
    });
    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        console.log("cid: " + cid)
        const course = await courseModel.findOne({ _id: cid });
        console.log("course: " + course)
        const courseId =  course.id.toString();
        console.log("courseId: " + courseId)
        const modules = await dao.findModuleByCid(courseId);//db.modules.filter((m) => m.course === cid);
        // const modules = db.modules
        //     .filter((m) => m.course === cid);
        console.log("modules: " + modules)
        res.send(modules);
    });
    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        //await dao.updateModule(mid, req.body);
        // const moduleIndex = db.modules.findIndex(
        //     (m) => m._id === mid);
        // db.modules[moduleIndex] = {
        //     ...db.modules[moduleIndex],
        //     ...req.body
        // };
        res.sendStatus(204);
    });

}



export default ModuleRoutes;