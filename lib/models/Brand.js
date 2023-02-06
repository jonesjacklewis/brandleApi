class Brand{
    constructor(name, logoHex, brandId){
        this.name = name;
        this.logoHex = logoHex;
        this.brandId = brandId;
    }

    getName(){
        return this.name;
    }

    getLogoHex(){
        return this.logoHex;
    }

    getBrandId(){
        return this.brandId;
    }

    setName(name){
        this.name = name;
    }

    setLogoHex(logoHex){
        this.logoHex = logoHex;
    }

    setBrandId(brandId){
        this.brandId = brandId;
    }


}

module.exports = Brand;