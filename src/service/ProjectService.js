import {BaseService} from "./BaseService";

export class ProjectService extends BaseService {

    getListProject = (offset, size, subject) => {
        return this.get("/project", {
            offset, size, subject
        })
    }
    getDetailProject = (offset, size, subject, id) => {
        return this.get("/project/" + id, {
            offset, size, subject
        })
    }
    getComents = (id) => {
        return this.get(`/comment/project/${id}`);
    }
    insertComnent = (projectId, content) => {
        return this.post("/comment", {
            projectId, content
        });
    }
}