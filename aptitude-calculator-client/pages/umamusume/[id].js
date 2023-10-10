import Image from 'next/image';
import { getAllUmamusumeIds, getUmamusume } from '@/util/umamusume';

export default function Umamusume({ umamusume }) {
  console.log(umamusume);
  return (
    <>
      <div>title</div>
      <div>
        <Image src={umamusume.image} width={144} height={144} alt="" />
      </div>
      <div>메지로 아르당</div>
      <div>
        <div>경기장 적성</div>
        <div>
          <div>잔디</div>
          <div></div>
        </div>
        <div>
          <div>더트</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>거리 적성</div>
        <div>
          <div>
            <div>단거리</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>마일</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>중거리</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>장거리</div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>각질 적성</div>
        <div>
          <div>
            <div>도주</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>선행</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>선입</div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>추입</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllUmamusumeIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const umamusume = await getUmamusume(params.id);

  return {
    props: {
      umamusume,
    },
  };
}
