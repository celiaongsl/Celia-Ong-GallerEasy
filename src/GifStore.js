import { decorate, observable, action, computed } from "mobx";

class GifStore {
    gifs = '';
    favouritedGifs = []; //send in entire objects

    setGifs = (allGifs) => {
        this.gifs = allGifs;
    }

    setFavouriteGifs = (favouriteGifs) => {
        //In here, we will do 2 things: If favouriteGifs is not inside the array
        //We .push() it in
        //If it is, we remove it by finding indexOf(favouriteGifs) then .splice(index,1)
        var insideArrayFlag = false;
        this.favouritedGifs.find((ele) => {
            if (ele.id === favouriteGifs.id) {
                insideArrayFlag = true;
            }
            return null
        })

        if (insideArrayFlag) {
            const index = this.favouritedGifs.indexOf(favouriteGifs);
            if (index > -1) {
                this.favouritedGifs.splice(index, 1)
            }
        } else {
            this.favouritedGifs.push(favouriteGifs);
        }
    }

    get getGifs() {
        return this.gifs
    }

    get getFavouriteGifs() {
        return this.favouritedGifs;
    }
}


GifStore = decorate(GifStore, {
    gifs: observable,
    favouritedGifs: observable,
    setGifs: action,
    setFavouriteGifs: action,
    getGifs: computed,
    getFavouriteGifs: computed,
});

export { GifStore };