class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = "https://resume-generator-app-backend-3.onrender.com" + endpoint;
    }

    getAll = () => {
        return fetch(this.endpoint).then((res) => res.json());
    }

    getOne = (id: string) => {
        return fetch(`${this.endpoint}/${id}`).then((res) => res.json());
    }

    delete = (id: string) => {
        return fetch(`${this.endpoint}/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
    }

    update = (id: string, updatedObj: T) => {
        return fetch(`${this.endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedObj),
        }).then((res) => res.json());
    }

    convert = (latexCode: string, name: string) => {
        return fetch(`${this.endpoint}/convert`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ latexCode, name }),
        }).then((res) => res.blob());
    }
}

export default APIClient;