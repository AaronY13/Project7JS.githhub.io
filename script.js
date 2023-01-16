const vehiclePerc = [
    [0.3, 0.65, 0.05, 0, 2, 10],
    [0.5, 0.25, 0.05, 0.2, 20, 40],
    [0.4, 0.4, 0.1, 0.1, 5, 20],
    [0.45, 0.3, 0.1, 0.15, 10, 30],
    [0.6, 0.15, 0.05, 0.2, 20, 40],
    [0.6, 0.25, 0.05, 0.1, 10, 30],
    [0.5, 0.4, 0.05, 0.05, 5, 15],
]

const carPrice = 12;
const truckPrice = 18;
const motorPrice = 8;
const busPrice = 0;

function hasEZPass(type)
{
    if (type == 2)
    {
        if(Math.random() <= 0.9)
        {
            return true;
        }
        return false;
    }
    else if (type == 1 | type == 3)
    {
        if(Math.random() <= 0.7)
        {
            return true;
        }
        return false;
    }
    else
    {
        return true;
    }
    
}

function isResident()
{
    if (Math.random() <= 0.6)
    {
        return true;
    }
    return false;
}

function calcPrice(type)
{
    let price = 0;
    if (type == 1)
    {
        price = carPrice;
        if (hasEZPass())
        {
            if (isResident())
            {
                price *= 0.6;
            }
            else
            {
                price *= 0.9;
            }
        }
    }
    else if (type == 2)
    {
        price = truckPrice;
        if (hasEZPass())
        {
            price *= 0.9
        }
    }
    else if (type == 3)
    {
        price = motorPrice;
        if (hasEZPass())
        {
            if (isResident())
            {
                price *= 0.6;
            }
            else
            {
                price *= 0.9;
            }
        }
    }
    else if (type == 4)
    {
        price = 0;
    }
    return price;
}

function randomNumOfVehicles(time)
{
    
}

function addInfo() {
    var table = document.getElementById("totalsTable");
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "info";
    cell2.innerHTML = "info";
}