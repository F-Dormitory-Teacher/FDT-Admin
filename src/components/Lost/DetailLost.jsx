import React, { useCallback } from 'react';
import moment from 'moment';

import './DetailLost.scss';
import SERVER from 'config/server';

const DetailLost = ({
  onClose,
  opendLost: { idx, title, imageUrl, content, location, userName, createdAt },
  modifyLostStatus,
}) => {
  const onModifyHandler = useCallback(lostStatus => {
    modifyLostStatus({
      lostId: idx,
      title,
      location,
      content,
      lostStatus,
      imageUrl: imageUrl ? imageUrl : '',
    });
  }, []);

  return (
    <div className='detail_lost'>
      <span className='detail_lost-close' onClick={onClose}>
        x
      </span>
      <aside className='detail_lost-image--bg'>
        {!!imageUrl ? (
          <img src={`${SERVER}/public/${imageUrl}`} alt='분실물 이미지' />
        ) : (
          <h3>이미지가 존재하지 않습니다.</h3>
        )}
      </aside>
      <article>
        <header>
          <h1>{title}</h1>
          <div>{location}</div>
        </header>
        <pre>
          {content}
          --------------------------------------------------------------- --------- ---------
          --------- --------- --------- sdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ
          ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ
          ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹsdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ
          ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ
          ㄴㅇ ㄹ ㅁㄴㅇ ㄹsdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ
          ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ
          ㅁㄴㅇ ㄹsdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ
          ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹ
          sdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ
          ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ
          ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴafdaf.
          sasddkajkdjskfjlja fkkfjk aljfkajdkfjalsjdfljdkajfjkasjfjakfjjkfjkafjjaskfj.afda
          sdf.ㅁㄴㅇㄹㅇㅁㄴㄹㅁㅇㄴㄹㅁ ㄹㅇㄴㄹ ㅁㄴㅇ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ
          ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ
          ㅁㄹ ㄴ ㄹ ㅇㄴ ㄹㅁ ㄴㅇㄹ ㅁㄴ ㅇㄹ ㅁㄴ ㅇㄹ ㄴㅇ ㄹ ㅁㄴㅇ ㄹㄴ ㅁㄹ ㄴ
        </pre>
        <footer>
          <div>
            <button
              onClick={() => confirm('보관 상태로 수정하시겠습니까?') && onModifyHandler('KEEP')}
            >
              보관
            </button>
            <button
              onClick={() => confirm('분실 상태로 수정하시겠습니까?') && onModifyHandler('LOSTED')}
            >
              분실
            </button>
          </div>
          <div>
            <h2>{userName}</h2>
            <span>{moment(new Date(createdAt), 'YYYY.MM.DD').fromNow(false)}...</span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default DetailLost;
