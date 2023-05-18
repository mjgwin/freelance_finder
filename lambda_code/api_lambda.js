import { DynamoDB } from "aws-sdk";

const TABLE_NAME = process.env.TABLE_NAME

const client = new DynamoDB({region: "us-east-1"})

function generate_user_id(){
    //todo
}

function process_user(routeKey, body, pathParameters) {
    let return_body = {outcome: "success", contents: {}}

    try {
        if(routeKey.includes("PUT /users")){
            let params = {
                TableName: TABLE_NAME,
                Item: {
                    "user_id": {
                        S: generate_user_id()
                    },
                    "user_email": {
                        S: body.user_email
                    },
                    "user_password": {
                        S: body.user_password
                    },
                }
            }
            client.putItem(params, function(err, data){
                if (err){ 
                    console.log(`Error adding user: ${body.user_email} to table: ${TABLE_NAME}`)
                    return_body.outcome = "failure"
                }
                else console.log(`Added user with email: ${body.user_email}`)
            })
        }else if(routeKey.includes("GET /users")){
            let params = {TableName: TABLE_NAME}
            client.scan(params, function(err, data){
                if (err){ 
                    console.log(`Error scanning table: ${TABLE_NAME}`)
                    return_body.outcome = "failure"
                }
                else return_body.contents = data.Items
            })
            //todo: handle GET /users/{id}
        }else if(routeKey.includes("DELETE /users/{id}")){
            //todo
        }else{
            console.log(`Unsupported route key: ${routeKey}`)
        }
    }catch(error){
        console.log(`Unexpected error: ${error}`)
    }
}

module.exports.handler = (event, context) => {
    process_user(event.routeKey, JSON.parse(event.body), event.pathParameters)
}