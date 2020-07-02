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
}