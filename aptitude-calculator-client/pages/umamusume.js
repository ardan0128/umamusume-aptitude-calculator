import Link from 'next/link';

export default function Umamusume() {
  const umamusumes = require('@/public/data/umamusume.json');

  return (
    <div>
      <div>hello</div>
      <Link href="/umamusume/100101">스페셜 위크</Link>
      <Link href="/umamusume">back</Link>
      <Link href="/umamusume">back</Link>
      <Link href="/umamusume">back</Link>
      <Link href="/umamusume">back</Link>
      <Link href="/umamusume">back</Link>
      {umamusumes.map(umamusume => (
        <Link key={umamusume.id} id={umamusume.id} href={`/umamusume/${umamusume.id}`}>
          {umamusume.name}
        </Link>
      ))}
    </div>
  );
}
