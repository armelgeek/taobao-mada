// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const translate = require("baidu-translate-api");
export default  async (req, res) => {
    await translate(req.query.text,{
      to : 'fra'
   }).then(response =>{
    console.log(response);
    res.send({traduction : response.trans_result.dst,original : req.query.text})
   },(err)=>{
    console.log(err)
   }).catch(err=>{
     res.send({traduction : req.query.text})
   });
};
