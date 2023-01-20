function idValidity (id) {
    const userIdNumber = Number(id);
    if ( Number.isNaN(userIdNumber) || userIdNumber <= 0){
        return prompt('Id Number is unvalid');
    } else {
        return true;
    }

}
export default idValidity;