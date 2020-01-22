class Elements{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Elements{
    constructor(name, buildYear, area, numberOfTrees){
        super(name, buildYear);
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }
    treeDensity(){
        let density = (this.numberOfTrees / this.area);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
    calcAge(){
        this.age = (new Date().getFullYear()) - this.buildYear ;
        return this.age;
    }
}

class Streets extends Elements{
    constructor(name, buildYear, length, size){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

}

let parkArray = [new Park('National Park',1980,5,950), new Park('Blue Park',2000,2,600), new Park('Ramna Park',1949,7,2000)];
function report(arr){
    let averageAge = 0,highestTree=0;
    parkArray.forEach(item => {
        averageAge +=  item.calcAge();
        item.treeDensity();
        if(item.numberOfTrees >= 1000){
            highestTree = item.name;
        }
    });
   console.log(`Average age of 3 parks is ${Math.round(averageAge/3)} years`);
   console.log(`${highestTree} has more than 1000 trees`);

}
console.log(`*******************Park report*****************`);
report(parkArray);

let streetArray = [new Streets('Northern Street',1900,2,'normal'),
                   new Streets('Parkview Street',1940,3,'big'),
                   new Streets('Northern Street',2000,1,'small'),
                   new Streets('Northern Street',1980,4,'huge')];

function streetReport(array){
    let totalLength = 0;
    array.forEach(item => {
        totalLength += item.length;
        console.log(`${item.name}, built in ${item.buildYear}, is a ${item.size} street`);
    });
    console.log(`4 streets have a total length of ${totalLength} km with an average of ${totalLength/4} km`);
}
console.log(`*******************Street report*****************`);
 streetReport(streetArray);
 


