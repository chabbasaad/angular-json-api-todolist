export interface Task {
    // we add ? to id for make id optionnal not obligatoire
    id?: number;
    label: string;
    completed: boolean;

}