import styled from "styled-components";
import theme from "../../styles/theme";

const MOCK_NOTICES = [
  { id: 1, title: "2025 수어 챌린지 이벤트 안내", date: "3/8" },
  { id: 2, title: "커뮤니티 이용 규칙 업데이트",   date: "3/8" },
  { id: 3, title: "학습 인증 게시판 신규 오픈",     date: "3/8" },
];

export default function SideNotice({ notices = MOCK_NOTICES }) {
  return (
    <Card>
      <Title>공지사항</Title>
      <NoticeList>
        {notices.map((notice) => (
          <NoticeItem key={notice.id}>
            <ItemLeft>
              <Tag>공</Tag>
              <NoticeTitle>{notice.title}</NoticeTitle>
            </ItemLeft>
            <DateText>{notice.date}</DateText>
          </NoticeItem>
        ))}
      </NoticeList>
    </Card>
  );
}

const Card = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h10};
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${theme.GRAYSCALE[10]};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const Tag = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 4px;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
`;

const NoticeTitle = styled.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

const DateText = styled.p`
  margin: 0;
  flex-shrink: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  text-align: right;
  white-space: nowrap;
`;
