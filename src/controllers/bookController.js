const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    if(authorId && authorId.length==24){
        let authorIdData = await authorModel.find({_id:authorId})
        if(authorIdData.length==0){
            res.send({msg:"the author is not present"})
        }
        else{
            let publisherId = book.publisher
            if(publisherId && publisherId.length==24){
                let publisherIdData = await publisherModel.find({_id:publisherId})
                if(publisherIdData.length==0){
                    res.send({msg: "the publisher is not present"})
                }
                else{
                    let bookCreated = await bookModel.create(book)
                    res.send({data: bookCreated})
                }
            }
            else{
                res.send({msg: "publisher Id is not present"})
            }
        }
    }
    else{
       res.send({msg:"author Id is not present."})
    }
}