function idValidity (id) {
    const userIdNumber = Number(id);
    if ( Number.isNaN(userIdNumber) || userIdNumber <= 0){
        return alert('Id Number is unvalid');
    } else {
        return true;
    }

}
export default idValidity;