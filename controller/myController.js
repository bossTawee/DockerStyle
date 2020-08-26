function APPYCompany(request, response) {
    const name = "JP";
    const dev = "MT";
    const company = "APPY";
    const error = "";
    response.status(200);
    response.json({name, 
        dev,
        company})
}
export default APPYCompany