import { nanoid } from "nanoid";
import React from "react";

export class App {
    id: string
    name: string
    icon: string
    __window__: React.FC | undefined
    constructor(name: string, icon_url: string) {
        this.id = nanoid()
        this.name = name
        this.icon = icon_url
    }

    __add_to_thread__() {
    }

    start() {
    }

    exit() {

    }

    __getWindow__():React.FC | undefined{
        return this.__window__
    }
}