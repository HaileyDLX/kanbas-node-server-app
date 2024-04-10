import moduleModel from "./model.js";
import courseModel from "../courses/model.js";

export const findAllModules = () => moduleModel.find();
export const findModuleById = (id) => moduleModel.findOne({ id: id });
//export const createModule = (module) => moduleModel.create(module);
export const createModule = async (cid, moduleData) => {
    const course = await courseModel.findOne({ _id: cid });
    const courseId = course.id.toString();
    const moduleWithCourse = {
        ...moduleData,
        course: courseId,
    };
    try {
        const newModule = await moduleModel.create(moduleWithCourse);
        return newModule;
    } catch (error) {
        throw new Error("Error creating module: " + error.message);
    }
};
export const updateModule = (id, module) => moduleModel.updateOne({ _id: id }, { $set: module });
export const deleteModule = (id) => moduleModel.deleteOne({ _id: id });
export  const findModulesForCourse = (courseId) => moduleModel.find({ course: courseId });