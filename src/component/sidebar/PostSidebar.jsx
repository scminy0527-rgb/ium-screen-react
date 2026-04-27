import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RelatedPostCard from "./RelatedPostCard";
import NoticeItem from "./NoticeItem";
import { colors, fonts, radius, layout } from "../../styles/themeOriginal";

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const defaultPostIcon =
  "https://www.figma.com/api/mcp/asset/020e0f66-1d95-461e-9604-907bd4d5c27d";

/* ── Layout ── */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${layout.sidebarWidth};
  flex-shrink: 0;
`;

/* ── Back Button ── */
const BackButton = styled.button`
  background: ${colors.bgCard};
  border: 2px solid ${colors.border};
  border-radius: ${radius.button};
  padding: 14px 10px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`;

/* ── Card base ── */
const Card = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  width: 100%;
`;

/* ── Author Info Card ── */
const AuthorCard = styled(Card)`
  padding: 19px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.textMain};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.border};
`;

const AuthorProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const AuthorAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${radius.button};
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.textMain};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

const LevelBadge = styled.span`
  background: ${colors.primaryLight};
  color: ${colors.primary};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  letter-spacing: -0.24px;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: ${radius.pill};
  white-space: nowrap;
`;

const StatsRow = styled.div`
  background: ${colors.bgSection};
  border-radius: ${radius.button};
  padding: 8px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const StatValue = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.primary};
  letter-spacing: -0.32px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

const StatLabel = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  letter-spacing: -0.24px;
  line-height: 20px;
  margin: 0;
  text-align: center;
`;

const OutlineButton = styled.button`
  background: ${colors.bgCard};
  border: 2px solid ${colors.primary};
  border-radius: ${radius.button};
  padding: 10px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.primary};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const FilledButton = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.button};
  padding: 10px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textWhite};
  letter-spacing: -0.28px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: ${colors.primaryDark};
  }
`;

/* ── Related Posts Card ── */
const RelatedCard = styled(Card)`
  padding: 17px 24px 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ── Notice Card ── */
const NoticeCard = styled(Card)`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NoticeTitleText = styled.p`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  margin: 0;
  width: 100%;
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MOCK_RELATED_POSTS = [
  {
    id: 1,
    title: "수어 자음 20개 한번에 정리!",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 2,
    title: "연관 게시글 2",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 3,
    title: "연관 게시글 3",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
  {
    id: 4,
    title: "연관 게시글 4",
    description: "헷갈리는 것만 모았어요",
    likes: 1,
    comments: 1,
  },
];

const MOCK_NOTICES = [
  { id: 1, title: "2025 수어 챌린지 이벤트 안내", date: "3/8" },
  { id: 2, title: "커뮤니티 이용 규칙 업데이트", date: "3/8" },
];

const PostSidebar = ({
  authorName = "수어러버김지민",
  authorAvatar = authorProfileImg,
  authorLevel = "Lv.7 · 열공러",
  authorPosts = 42,
  authorLikes = 128,
  authorStreak = 30,
  relatedPosts = MOCK_RELATED_POSTS,
  notices = MOCK_NOTICES,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← 목록으로 돌아가기</BackButton>

      <AuthorCard>
        <SectionHeader>
          <SectionTitle>작성자 정보</SectionTitle>
          <Divider />
        </SectionHeader>

        <AuthorProfileBlock>
          <AuthorAvatar src={authorAvatar} alt={authorName} />
          <AuthorName>{authorName}</AuthorName>
          <LevelBadge>{authorLevel}</LevelBadge>
        </AuthorProfileBlock>

        <StatsRow>
          <StatItem>
            <StatValue>{authorPosts}</StatValue>
            <StatLabel>게시글</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{authorLikes}</StatValue>
            <StatLabel>좋아요</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{authorStreak}</StatValue>
            <StatLabel>연속학습</StatLabel>
          </StatItem>
        </StatsRow>

        <OutlineButton>+ 팔로우</OutlineButton>
        <FilledButton>해당 회원과 1:1 채팅 시작</FilledButton>
      </AuthorCard>

      <RelatedCard>
        <SectionTitle>관련 게시글</SectionTitle>
        {relatedPosts.map((post) => (
          <RelatedPostCard
            key={post.id}
            icon={post.icon || defaultPostIcon}
            title={post.title}
            description={post.description}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </RelatedCard>

      <NoticeCard>
        <NoticeTitleText>공지사항</NoticeTitleText>
        <NoticeList>
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              title={notice.title}
              date={notice.date}
            />
          ))}
        </NoticeList>
      </NoticeCard>
    </Wrapper>
  );
};

export default PostSidebar;
