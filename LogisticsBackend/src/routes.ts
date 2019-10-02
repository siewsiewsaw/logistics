import {CargoController} from "./controller/CargoController";

export const Routes = [{
    method: "get",
    route: "/cargo",
    controller: CargoController,
    action: "all"
}, {
    method: "get",
    route: "/cargo/:id",
    controller: CargoController,
    action: "one"
}, {
    method: "post",
    route: "/cargo",
    controller: CargoController,
    action: "save"
}, {
    method: "delete",
    route: "/cargo/:id",
    controller: CargoController,
    action: "remove"
}];