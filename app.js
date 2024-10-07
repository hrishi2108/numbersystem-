let numbers = [19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,9,27,12,30]
let a = 0
for (i = 0 ; i <numbers.length; i++)
{
    for(j=0;j < numbers.length;j++)
    {
        if(i %j == 0)
        {
            a++
        }
    }
    if(a == 2)
    {
        condole.log("It is a prime number")
    }
    else{
        console.log("It is not a prime number")
    }
}