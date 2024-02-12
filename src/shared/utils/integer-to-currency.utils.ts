function integerToCurrency(amount: number): string {
    const formattedInt = amount.toLocaleString('en-PH', {
        style: 'currency',
        currency: 'PHP'
    });

    return formattedInt;
}

export {
    integerToCurrency
}