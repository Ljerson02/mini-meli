import Price from '@/features/product/types/Price';
import { formatLAPrices } from '@/utils/formaters';

const PriceNumberFormat = ({ price }: { price: Price }) => {
  const formatedAmount = formatLAPrices(price.amount);
  return (
    <>
      $ {formatedAmount} <sup className="fs-5">{price.decimals.toString().padStart(2, '0')}</sup>
    </>
  );
};

export default PriceNumberFormat;
