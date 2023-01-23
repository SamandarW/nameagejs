function usersName(userName){
    if( userName.name.length > 5 ){
        console.log(userName.name + "'s name is more than 5 letters")
    }else if(userName.name.length == 5){
        console.log(userName.name + "'s name equals to 5 letters")
    }
    else{
        console.log(userName.name + "'s name is less than 5 letters")
    }
}
    
    let users = [

        {
            name: "Samandar"
        },
        {
            name: "Asliddin"
        },
        {
            name: "Yusuf"
        },
        {
            name: "Javohir"
        },
        {
            name: "Orif"
        },
        {
            name: "Murod"
        },
        {
            name: "Sardor"
        },
        {
            name: "Madina",
        },
        {
            name: "Jonhatan"
        },
        {
            name: "Ramazon"
        },
        {
            name: "Xurshid"
        },
        {
            name: "Muhammadyusuf"
        },
        {
            name: "Zoirjon"
        },
        {
            name: "Farhodjon"
        },
        {
            name: "Odilbek"
        },
        ]
for(let i=0; i<users.length; i++){
    usersName(users[i])
}