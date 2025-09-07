const student={
    name:"afsheen",
    age:23,
    eng:95,
    math:95,
    physics:80,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.physics)/3;
        console.log(avg);
    }
}