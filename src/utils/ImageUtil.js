import store from "../store";
export default class ImageUtil {

    static getErrorImage() {
        return ImageUtil.getImagePath() + "not_available.jpg"
    }
    
    static getImage(img){
        return img ? ImageUtil.getImagePath() + img : ImageUtil.getErrorImage()
    }

    static getImagePath(){
        return store.getState().HomeData.imagepath
    }

}


