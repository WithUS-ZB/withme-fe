import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useWrite = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const URL = import.meta.env.VITE_SERVER_URL;

  const [targetId, setTargetId] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  /** 게시글 작성 */
  const addPost = async (data: any) => {
    try {
      await axios
        .post(
          `${URL}/api/gathering`,
          {
            title: data.title,
            content: data.content,
            gatheringType: data.gatheringType,
            maximumParticipant: data.maximumParticipant,
            recruitmentStartDt: data.recruitmentStartDt,
            recruitmentEndDt: data.recruitmentEndDt,
            category: data.category,
            address: data.address,
            detailedAddress: data.detailedAddress,
            lat: data.lat,
            lng: data.lng,
            mainImg: data.mainImg,
            day: data.day,
            time: data.time,
            participantsType: data.participantsType,
            fee: data.fee,
            participantSelectionMethod: data.participantSelectionMethod,
            likeCount: 0,
          },
          {
            headers: {
              Authorization: token,
            },
            responseType: 'json',
          },
        )
        .then((res) => {
          console.log('결과 데이터 : ', res.data, '통신 결과 : ', res);
          navigate('/post?type=all');
        });
    } catch (error) {
      console.error(error);
      console.log('에러');
    }
  };

  /** 게시글 삭제 */
  const RemovePost = async (id: number) => {
    try {
      await axios
        .delete(`${URL}/api/gathering/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => console.log('삭제 확인 : ', res));
      navigate('/post?type=all');
    } catch (error) {
      console.error(error);
    }
  };

  /** 게시글 수정 이동 */
  const goEdit = (id: any) => {
    console.log('업데이트 전 -', targetId, '-', isEdit);

    setTargetId(id);
    setIsEdit(true);
    navigate('/write');
  };

  return { addPost, RemovePost, goEdit, targetId, isEdit };
};

export default useWrite;
