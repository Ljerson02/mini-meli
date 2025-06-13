import Link from 'next/link';

export default function CategoriesNav({ categories }: { categories: string[] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {categories.map((cat) => (
          <li className="breadcrumb-item" key={cat}>
            <Link href={`/items?search=${encodeURIComponent(cat)}`}>{cat}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
