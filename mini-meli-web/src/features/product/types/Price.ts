export default class Price {
  constructor(
    public currency: string,
    public amount: number,
    public decimals: number
  ) {}
}
