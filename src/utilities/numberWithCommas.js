const numberWithCommas = number => Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

export default numberWithCommas