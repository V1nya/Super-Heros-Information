class ServerConnect {
    constructor() {
        this.ipServer  = "192.168.0.109:5000"
    }

    async getAllHero() {
        try {
            let response = await fetch(`http://${this.ipServer}/heroes`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
            });

            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                console.log("Error HTTP: " + response.status);
            }
        } catch (error) {
            console.log("Error:", error);
        }
        return []

    }

    async getOneHero(id) {
        try {
            let response = await fetch(`http://${this.ipServer}/heroes/${id}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
            });

            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                console.log("Error HTTP: " + response.status);
            }
        } catch (error) {
            console.log("Error:", error);
        }
        return {}
    }

    async saveOrUpdateHero(hero) {
        if (hero._id == "none") { //create Hero
            try {
                let response = await fetch(`http://${this.ipServer}/heroes`, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(hero),
                });

                if (response.ok) {
                    console.log("Create new hero")
                } else {
                    console.log("Error HTTP: " + response.status);
                }
            } catch (error) {
                console.log("Error:", error);
            }
        } else { // update Hero
            try {
                let response = await fetch(`http://${this.ipServer}/heroes/update`, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(hero),
                });

                if (response.ok) {
                    console.log("Update  hero")
                } else {
                    console.log("Error HTTP: " + response.status);
                }
            } catch (error) {
                console.log("Error:", error);
            }
        }


    }

    getClearHero() {
        return {
            _id: "none",
            nickName: "",
            realName: "",
            originalDescription: "",
            superPowers: "",
            catchPhrase: "",
            imageURL: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3526/production/_99560631_superheroesgetty.jpg"
        }
    }

    async deleteHero(id) {
        try {
            let response = await fetch(`http://${this.ipServer}/heroes/${id}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
            });

            if (response.ok) {
                console.log("Delete hero")
            } else {
                console.log("Error HTTP: " + response.status);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }


}

module.exports = new ServerConnect()