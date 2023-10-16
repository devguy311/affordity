const formatAmountInUSD = (amount: number): string => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)

}

const formatAmountWithGap = (amount: number) => {
    return amount.toLocaleString().replaceAll(",", " ")
}

export {
    formatAmountInUSD,
    formatAmountWithGap
}