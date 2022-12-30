var variable = null;
let newVar = 100000;
const constant = 1;

console.log(typeof variable);

function showSomething(name) {
    document.getElementById('text').innerHTML = "Hello World!"

    console.log(name);
}

const showDate = () => {
    document.getElementById('date').innerHTML = Date()
}

const showSeason = (season) => {
    if (season === 'fall'){ 
        document.getElementById('season').innerHTML = 'accepted'
    }
    else(
        document.getElementById('season').innerHTML = 'oskol'
        
    )
}

const showNumbers = () => {
    for(let i=0; i<100 ; i++ ){
        console.log(i);
    }
}

const calcNumber = () => {
    let i = 10
    
    console.log( i !== 10 );
}

const showClerks = () => {
    let data = [
        {
            name:'Hamidreza',
            lastName: "Hassanzadeh",
            age: 20
        },
        {
            name: "Arman",
            lastName:'Fakhteh',
            age: 23
        },
        {
            name: 'Seyyed',
            lastName: 'Deldari',
            age: 28
        }
    ]

    data.map( (item) => {
        // console.log("Name: ", item.name + ' ' + item.lastName);
        //console.log("Age: ", item.age);
        console.log( `Name: ${item.name} ${item.lastName}` );
        console.log(`Age: ${item.age}`);
    } )
}

const showmounthnomber = () => {
    const mounth = document.getElementById('input').value 
    switch (mounth){
    case 'farvardin':
        console.log('1');
        break;
        case 'ordibehesht':
            console.log('2');
            break;
        case 'khordad':
            console.log('3');
            break;
        case 'tir':
            console.log('4');
            break;
        case 'mordad':
            console.log('5');
            break;
        case 'shahrivar':
            console.log('6');
            break;
        case 'mehr':
            console.log('7');
            break;
        case 'aban':
            console.log('8');
            break;
        case 'azar':
            console.log('9');
            break;
        case 'dey':
            console.log('10');
            break;
        case 'bahman':
            console.log('11');
            break;
        case 'esfand':
            console.log('12');
            break;
    default:
        console.log("No Month!");
        
}}

const shownames = () => {
    let data  = [
        {
            name:'arman',
            lastname:'fakhteh',
            bd:1378,
            clerknumber:123123,
            maritalstatus:'single',
            monthlyincome:2000,
            },
        {
            name:'hamidreza',
            lastname:'hassanzade',
            bd:1378,
            clerknumber:234345,
            maritalstatus:'married',
            monthlyincome:12000000,
            },
        {
            name:'amin',
            lastname:'deldari',
            bd:1378,
            clerknumber:345456,
            maritalstatus:'married',
            monthlyincome:200000000,
            },
        {
            name:'negar',
            lastname:'naserzade',
            bd:1381,
            clerknumber:456567,
            maritalstatus:'single',
            monthlyincome:13000000,
            },
        {
            name:'nahal',
            lastname:'naserzade',
            bd:11383,
            clerknumber:567678,
            maritalstatus:'single',
            monthlyincome:1100000,
            },
        {
            name:'mobina',
            lastname:'emami',
            bd:1381,
            clerknumber:678789,
            maritalstatus:married,
            monthlyincome:200,
            },
        {
            name:'ali',
            lastname:'gharahi',
            bd:1371,
            clerknumber:7898910,
            maritalstatus:'single',
            monthlyincome:11100000,
            },
        {
            name:'amirhosain',
            lastname:'mashallah',
            bd:1375,
            clerknumber:891091011,
            maritalstatus:'married',
            monthlyincome:20002121,
            },
        {
            name:'mamad',
            lastname:'lashkari',
            bd:1374,
            clerknumber:91011101112,
            maritalstatus:'single',
            monthlyincome:40000000,
            },
        {
            name:'mamad',
            lastname:'bekesh',
            bd:1321,
            clerknumber:101112111213,
            maritalstatus:'single',
            monthlyincome:12340000,
            },
        {
            name:'jasem',
            lastname:'naserzade',
            bd:1349,
            clerknumber:111213121314,
            maritalstatus:'married',
            monthlyincome:250000000,
            },
        {
            name:'amin',
            lastname:'hamaeefard',
            bd:1375,
            clerknumber:121314131415,
            maritalstatus:'married',
            monthlyincome:300,
            },

            
            
            
            
        ]
        data.map( (item) =>{
        console.log(`name:${item.name} ${item.lastname}`);
        console.log(`bd: ${item.bd}`);    
        })
    }

