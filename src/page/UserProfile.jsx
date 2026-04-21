import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faEye,
  faMagnifyingGlass,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import { colors, fonts, radius, shadows, layout } from '../styles/theme';

/* ── Figma 에셋 URL (7일 TTL) ── */
const imgProfileAvatar = 'https://www.figma.com/api/mcp/asset/7616ba05-a3ee-4444-843d-51e0019d647e';
const imgPostThumb1    = 'https://www.figma.com/api/mcp/asset/0304e74f-a9d6-4296-b869-93ea9c6b507b';
const imgUserSmall     = 'https://www.figma.com/api/mcp/asset/eedd2bfb-7438-42f4-8a24-0df7811fe037';
const imgLogoMark      = 'https://www.figma.com/api/mcp/asset/5a7748d6-22f7-4632-831b-45bc5fe5ea87';
const imgDefaultThumb  = 'https://www.figma.com/api/mcp/asset/c806458d-aec6-49c0-8a40-0f70b77cb3d4';

/* ── 샘플 데이터 ── */
const POSTS = [
  {
    id: 1,
    category: '학습 인증',
    time: '방금 전',
    title: '수어에서 감정 표현할 때 표정이 얼마나 중요한가요?',
    description:
      '수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제제제제제제제제제제제제제 ㅇㅇㅇㅇㅇㅇㅇㅇ...',
    thumbnail: imgPostThumb1,
    likes: 42,
    comments: 18,
    views: '9999+',
  },
  {
    id: 2,
    category: '학습 인증',
    time: '방금 전',
    title: '오늘은 용기내서 말해봤어요',
    description: '오늘은 그래도 이야기 성공',
    thumbnail: null,
    likes: 42,
    comments: 18,
    views: '9999+',
  },
  {
    id: 3,
    category: '학습 인증',
    time: '방금 전',
    title: '수어에서 감정 표현할 때 표정이 얼마나 중요한가요?',
    description:
      '수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제제제제제제제제제제제제제 ㅇㅇㅇㅇㅇㅇㅇㅇ...',
    thumbnail: null,
    likes: 42,
    comments: 18,
    views: '9999+',
  },
  {
    id: 4,
    category: '학습 인증',
    time: '방금 전',
    title: '수어에서 감정 표현할 때 표정이 얼마나 중요한가요?',
    description:
      '수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제제제제제제제제제제제제제 ㅇㅇㅇㅇㅇㅇㅇㅇ...',
    thumbnail: null,
    likes: 42,
    comments: 18,
    views: '9999+',
  },
];

/* ═══════════════════════════════════════════
   STYLED COMPONENTS
═══════════════════════════════════════════ */

/* ── 페이지 전체 ── */
const PageWrapper = styled.div`
  background: ${colors.bgSection};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* ── 헤더 ── */
const HeaderBar = styled.header`
  background: ${colors.bgCard};
  height: ${layout.headerHeight};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const HeaderInner = styled.div`
  width: ${layout.contentWidth};
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 49px;
`;

const LogoMark = styled.img`
  height: 28px;
  width: auto;
`;

const LogoText = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
  color: ${colors.primary};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 49px;
  flex: 1;
`;

const NavLink = styled.a`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.primaryDark};
  text-decoration: none;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 8px;
`;

const LoginBtn = styled.button`
  height: 32px;
  padding: 0 16px;
  background: ${colors.bgCard};
  border: 2px solid ${colors.primary};
  border-radius: ${radius.button};
  color: ${colors.primary};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  cursor: pointer;
`;

const SignupBtn = styled.button`
  height: 32px;
  padding: 0 16px;
  background: ${colors.primary};
  border: none;
  border-radius: ${radius.button};
  color: ${colors.textWhite};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  cursor: pointer;
`;

/* ── 컨텐츠 래퍼 ── */
const ContentWrapper = styled.main`
  width: ${layout.contentWidth};
  margin: 0 auto;
  padding: 20px 0 60px;
  flex: 1;
`;

/* ── 브레드크럼 ── */
const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  height: ${layout.breadcrumbHeight};
  margin-bottom: 4px;
`;

const BreadcrumbItem = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  cursor: pointer;
`;

const BreadcrumbSep = styled.span`
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
`;

const BreadcrumbCurrent = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
`;

/* ── 메인 그리드: 12컬럼 → 9컬럼(984px) + 3컬럼(312px), 간격 24px ── */
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: ${layout.cardMaxWidth} ${layout.sidebarWidth};
  gap: ${layout.gridGap};
  align-items: start;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${layout.gridGap};
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${layout.gridGap};
`;

/* ── 프로필 배너 ── */
const ProfileBanner = styled.div`
  background: ${colors.gradientProfile};
  border-radius: ${radius.card};
  padding: 32px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
`;

const ProfileAvatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${radius.card};
  object-fit: cover;
  flex-shrink: 0;
`;

const ProfileInfoRow = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfileTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileName = styled.h1`
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xxxl};
  color: ${colors.textWhite};
  letter-spacing: -0.56px;
  line-height: normal;
`;

const ProfileTagRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ProfileTag = styled.span`
  background: ${colors.tagOnPrimary};
  border: 1px solid ${colors.tagOnPrimaryBorder};
  border-radius: ${radius.pill};
  padding: 4px 16px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
  line-height: 20px;
  letter-spacing: -0.24px;
  white-space: nowrap;
`;

const ProfileBio = styled.p`
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.regular};
  font-size: ${fonts.size.md};
  color: ${colors.textWhiteSubtle};
  line-height: 22px;
  letter-spacing: -0.28px;
`;

const ProfileMeta = styled.p`
  margin: 0;
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhiteSubtle};
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const FollowBtn = styled.button`
  flex-shrink: 0;
  padding: 10px 16px;
  background: ${colors.tagOnPrimary};
  border: 2px solid ${colors.tagOnPrimaryBorder};
  border-radius: ${radius.button};
  color: ${colors.textWhite};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  letter-spacing: -0.28px;
  white-space: nowrap;
  cursor: pointer;
`;

/* ── 검색 ── */
const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 536px;
  padding: 12px;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: ${radius.button};
`;

const SearchPlaceholder = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.md};
  color: ${colors.textSub};
  line-height: 24px;
`;

const SearchIconWrap = styled.span`
  color: ${colors.textSub};
  font-size: ${fonts.size.md};
`;

/* ── 탭 + 정렬 ── */
const TabSortRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const TabBtn = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: ${radius.button};
  background: ${({ $active }) => ($active ? colors.primary : colors.bgSection)};
  border: 1px solid ${({ $active }) => ($active ? colors.primary : colors.border)};
  cursor: pointer;
  flex-shrink: 0;
`;

const TabBtnInner = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const TabBtnIcon = styled.span`
  font-size: ${fonts.size.md};
  color: ${({ $active }) => ($active ? colors.textWhite : colors.textSub)};
  display: flex;
  align-items: center;
`;

const TabBtnLabel = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.md};
  color: ${({ $active }) => ($active ? colors.textWhite : colors.textSub)};
  line-height: 24px;
  white-space: nowrap;
`;

const TabBtnCount = styled.span`
  background: ${colors.bgCard};
  border-radius: ${radius.pill};
  padding: 3px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${({ $active }) => ($active ? colors.primary : colors.textSub)};
  white-space: nowrap;
`;

const TabSpacer = styled.div`
  flex: 1;
`;

const SortArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const SortBtn = styled.button`
  padding: 6px 16px;
  background: ${({ $active }) => ($active ? colors.primaryLight : colors.bgCard)};
  border: 1px solid ${({ $active }) => ($active ? colors.primary : colors.border)};
  border-radius: ${radius.sm};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  cursor: pointer;
  white-space: nowrap;
`;

/* ── 게시글 카드 ── */
const PostCard = styled.article`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadows.card};
`;

const PostCardTop = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CategoryTag = styled.span`
  background: ${colors.primary};
  border-radius: ${radius.pill};
  padding: 2px 8px;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
  line-height: 16px;
  letter-spacing: 0.1px;
`;

const PostTime = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
`;

const PostCardMid = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
`;

const PostContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const PostTitle = styled.h2`
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xxxl};
  color: ${colors.textMain};
  letter-spacing: -0.84px;
  line-height: normal;
`;

const PostDescription = styled.p`
  margin: 0;
  font-family: ${fonts.family};
  font-size: ${fonts.size.lg};
  color: ${colors.textSub};
  line-height: 28px;
  letter-spacing: -0.54px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostThumbnail = styled.div`
  width: 96px;
  height: 96px;
  border-radius: ${radius.card};
  background: ${colors.bgThumbnail};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PostThumbnailImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbnailDefault = styled.img`
  width: 50px;
  height: auto;
`;

const PostCardBottom = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AuthorAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.base};
  color: ${colors.textMain};
  letter-spacing: 0.32px;
`;

const PostStats = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StatIcon = styled.span`
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  display: flex;
  align-items: center;
`;

const StatCount = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textMain};
`;

/* ── 페이지네이션 ── */
const PaginationWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const PageBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${radius.input};
  border: 2px solid ${({ $active }) => ($active ? 'transparent' : colors.border)};
  background: ${({ $active }) => ($active ? colors.primary : 'transparent')};
  color: ${({ $active }) => ($active ? colors.textWhite : colors.textDark)};
  font-family: ${fonts.family};
  font-weight: ${({ $active }) => ($active ? fonts.weight.bold : fonts.weight.regular)};
  font-size: ${fonts.size.sm};
  letter-spacing: -0.24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ── 사이드바: 활동 통계 ── */
const StatsCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 24px 33px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const StatsTitle = styled.p`
  margin: 0;
  align-self: flex-start;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.md};
  color: ${colors.textMain};
  letter-spacing: -0.28px;
  width: 100%;
`;

const StatsDivider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${colors.border};
  width: 100%;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 118px);
  gap: 12px;
`;

const StatCell = styled.div`
  background: ${colors.bgSection};
  border-radius: ${radius.button};
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StatCellNum = styled.span`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
  color: ${colors.primary};
  letter-spacing: -0.4px;
`;

const StatCellLabel = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textSub};
  line-height: 20px;
  letter-spacing: -0.24px;
`;

/* ── 사이드바: 신고/차단 ── */
const ReportCard = styled.div`
  background: ${colors.bgCard};
  border-radius: ${radius.card};
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const WarningBox = styled.div`
  position: relative;
  width: 100%;
  height: 72px;
`;

const WarningBg = styled.div`
  position: absolute;
  inset: 0;
  background: ${colors.orangeBg};
  border-radius: 2px 16px 16px 2px;
`;

const WarningLine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: ${colors.orange};
  border-radius: 2px;
`;

const WarningTitle = styled.p`
  position: absolute;
  top: 12px;
  left: 16px;
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${colors.orange};
  white-space: nowrap;
`;

const WarningText = styled.div`
  position: absolute;
  top: 32px;
  left: 16px;
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.orangeDark};
  line-height: normal;
`;

const ActionBtn = styled.button`
  width: 100%;
  padding: 8px 16px;
  background: ${colors.bgCard};
  border: 2px solid ${({ $danger }) => ($danger ? colors.orange : colors.border)};
  border-radius: ${radius.button};
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.sm};
  color: ${({ $danger }) => ($danger ? colors.orange : colors.textSub)};
  line-height: 20px;
  letter-spacing: -0.24px;
  cursor: pointer;
`;

/* ── 푸터 ── */
const Footer = styled.footer`
  background: ${colors.primaryFooter};
  padding: 32px 0;
`;

const FooterInner = styled.div`
  width: ${layout.contentWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const FooterNavLink = styled.a`
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.base};
  color: ${colors.textWhite};
  text-decoration: none;
  cursor: pointer;
`;

const FooterDividerV = styled.div`
  width: 1px;
  height: 11px;
  background: ${colors.footerDivider};
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FooterInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterInfoLabel = styled.p`
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.smMd};
  color: ${colors.textWhite};
  letter-spacing: -0.48px;
`;

const FooterInfoRow = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterInfoText = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.sm};
  color: ${colors.textWhite};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialBtn = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid ${colors.footerSocialBorder};
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SocialLabel = styled.span`
  font-family: ${fonts.family};
  font-size: ${fonts.size.xs};
  color: ${colors.textWhite};
`;

/* ═══════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════ */

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [activeSort, setActiveSort] = useState('latest');

  return (
    <PageWrapper>
      {/* 헤더 */}
      <HeaderBar>
        <HeaderInner>
          <Logo>
            <LogoMark src={imgLogoMark} alt="이음 로고마크" />
            <LogoText>이음</LogoText>
          </Logo>
          <NavLinks>
            <NavLink>학습</NavLink>
            <NavLink>시험</NavLink>
            <NavLink>커뮤니티</NavLink>
            <NavLink>고객지원</NavLink>
          </NavLinks>
          <HeaderRight>
            <LoginBtn>로그인</LoginBtn>
            <SignupBtn>회원가입</SignupBtn>
          </HeaderRight>
        </HeaderInner>
      </HeaderBar>

      {/* 메인 컨텐츠 */}
      <ContentWrapper>
        {/* 브레드크럼 */}
        <Breadcrumb>
          <BreadcrumbItem>홈</BreadcrumbItem>
          <BreadcrumbSep>›</BreadcrumbSep>
          <BreadcrumbItem>커뮤니티</BreadcrumbItem>
          <BreadcrumbSep>›</BreadcrumbSep>
          <BreadcrumbCurrent>수어러버김지민 님의 프로필</BreadcrumbCurrent>
        </Breadcrumb>

        {/* 12컬럼 그리드: 9컬럼(좌) + 3컬럼(우) */}
        <MainGrid>
          {/* ── 왼쪽 9컬럼 ── */}
          <LeftColumn>
            {/* 프로필 배너 */}
            <ProfileBanner>
              <ProfileAvatar src={imgProfileAvatar} alt="프로필 이미지" />
              <ProfileInfoRow>
                <ProfileTextGroup>
                  <ProfileName>말하려는 여우</ProfileName>
                  <ProfileTagRow>
                    <ProfileTag>Lv.7 · 열공러</ProfileTag>
                    <ProfileTag>30일 연속 학습</ProfileTag>
                  </ProfileTagRow>
                  <ProfileBio>
                    수어를 배우며 세상과 더 넓게 소통하고 싶어요. 매일 조금씩, 꾸준히 나아가는 중입니다 😊
                  </ProfileBio>
                  <ProfileMeta>2025년 2월 가입 · 서울</ProfileMeta>
                </ProfileTextGroup>
                <FollowBtn>+ 팔로우</FollowBtn>
              </ProfileInfoRow>
            </ProfileBanner>

            {/* 게시글 검색 */}
            <SearchInputWrap>
              <SearchPlaceholder>게시글 검색</SearchPlaceholder>
              <SearchIconWrap>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </SearchIconWrap>
            </SearchInputWrap>

            {/* 탭 토글 + 정렬 */}
            <TabSortRow>
              <TabBtn $active={activeTab === 'posts'} onClick={() => setActiveTab('posts')}>
                <TabBtnInner>
                  <TabBtnIcon $active={activeTab === 'posts'}>
                    <FontAwesomeIcon icon={faFileLines} />
                  </TabBtnIcon>
                  <TabBtnLabel $active={activeTab === 'posts'}>작성 게시글</TabBtnLabel>
                </TabBtnInner>
                <TabBtnCount $active={activeTab === 'posts'}>42</TabBtnCount>
              </TabBtn>

              <TabBtn $active={activeTab === 'comments'} onClick={() => setActiveTab('comments')}>
                <TabBtnInner>
                  <TabBtnIcon $active={activeTab === 'comments'}>
                    <FontAwesomeIcon icon={faComment} />
                  </TabBtnIcon>
                  <TabBtnLabel $active={activeTab === 'comments'}>작성 댓글</TabBtnLabel>
                </TabBtnInner>
                <TabBtnCount $active={activeTab === 'comments'}>42</TabBtnCount>
              </TabBtn>

              <TabBtn $active={activeTab === 'liked'} onClick={() => setActiveTab('liked')}>
                <TabBtnInner>
                  <TabBtnIcon $active={activeTab === 'liked'}>
                    <FontAwesomeIcon icon={faHeart} />
                  </TabBtnIcon>
                  <TabBtnLabel $active={activeTab === 'liked'}>좋아요한 글</TabBtnLabel>
                </TabBtnInner>
                <TabBtnCount $active={activeTab === 'liked'}>42</TabBtnCount>
              </TabBtn>

              <TabSpacer />

              <SortArea>
                <SortBtn $active={activeSort === 'latest'} onClick={() => setActiveSort('latest')}>
                  최신순
                </SortBtn>
                <SortBtn $active={activeSort === 'popular'} onClick={() => setActiveSort('popular')}>
                  인기순
                </SortBtn>
              </SortArea>
            </TabSortRow>

            {/* 게시글 목록 */}
            {POSTS.map((post) => (
              <PostCard key={post.id}>
                <PostCardTop>
                  <CategoryTag>{post.category}</CategoryTag>
                  <PostTime>{post.time}</PostTime>
                </PostCardTop>

                <PostCardMid>
                  <PostContentArea>
                    <PostTitle>{post.title}</PostTitle>
                    <PostDescription>{post.description}</PostDescription>
                  </PostContentArea>
                  <PostThumbnail>
                    {post.thumbnail ? (
                      <PostThumbnailImg src={post.thumbnail} alt="게시글 이미지" />
                    ) : (
                      <ThumbnailDefault src={imgDefaultThumb} alt="" />
                    )}
                  </PostThumbnail>
                </PostCardMid>

                <PostCardBottom>
                  <AuthorInfo>
                    <AuthorAvatar src={imgUserSmall} alt="작성자 아바타" />
                    <AuthorName>말하려는 여우</AuthorName>
                  </AuthorInfo>
                  <PostStats>
                    <StatItem>
                      <StatIcon><FontAwesomeIcon icon={faHeart} /></StatIcon>
                      <StatCount>{post.likes}</StatCount>
                    </StatItem>
                    <StatItem>
                      <StatIcon><FontAwesomeIcon icon={faComment} /></StatIcon>
                      <StatCount>{post.comments}</StatCount>
                    </StatItem>
                    <StatItem>
                      <StatIcon><FontAwesomeIcon icon={faEye} /></StatIcon>
                      <StatCount>{post.views}</StatCount>
                    </StatItem>
                  </PostStats>
                </PostCardBottom>
              </PostCard>
            ))}

            {/* 페이지네이션 */}
            <PaginationWrap>
              <PageBtn>{'<'}</PageBtn>
              <PageBtn $active>1</PageBtn>
              <PageBtn>2</PageBtn>
              <PageBtn>3</PageBtn>
              <PageBtn>4</PageBtn>
              <PageBtn>5</PageBtn>
              <PageBtn>{'>'}</PageBtn>
            </PaginationWrap>
          </LeftColumn>

          {/* ── 오른쪽 3컬럼 사이드바 ── */}
          <RightColumn>
            {/* 활동 통계 */}
            <StatsCard>
              <StatsTitle>📊 활동 통계</StatsTitle>
              <StatsDivider />
              <StatsGrid>
                <StatCell>
                  <StatCellNum>42</StatCellNum>
                  <StatCellLabel>게시글</StatCellLabel>
                </StatCell>
                <StatCell>
                  <StatCellNum>87</StatCellNum>
                  <StatCellLabel>댓글</StatCellLabel>
                </StatCell>
                <StatCell>
                  <StatCellNum>111</StatCellNum>
                  <StatCellLabel>받은 좋아요</StatCellLabel>
                </StatCell>
                <StatCell>
                  <StatCellNum>63</StatCellNum>
                  <StatCellLabel>좋아요한 글</StatCellLabel>
                </StatCell>
              </StatsGrid>
            </StatsCard>

            {/* 신고 및 차단 */}
            <ReportCard>
              <WarningBox>
                <WarningBg />
                <WarningLine />
                <WarningTitle>⚠️ 신고 및 차단</WarningTitle>
                <WarningText>
                  <div>부적절한 활동이 확인되면</div>
                  <div>신고해 주세요. 운영팀이 검토합니다.</div>
                </WarningText>
              </WarningBox>
              <ActionBtn $danger>이 유저 신고하기</ActionBtn>
              <ActionBtn>이 유저 차단하기</ActionBtn>
            </ReportCard>
          </RightColumn>
        </MainGrid>
      </ContentWrapper>

      {/* 푸터 */}
      <Footer>
        <FooterInner>
          <FooterBottom>
            <FooterInfoSection>
              <FooterNav>
                <FooterNavLink>개인정보처리방침</FooterNavLink>
                <FooterDividerV />
                <FooterNavLink>서비스 이용약관</FooterNavLink>
              </FooterNav>
              <FooterInfoLabel>INFO.</FooterInfoLabel>
              <FooterInfoRow>
                <FooterInfoText>주식회사 이음</FooterInfoText>
                <FooterInfoText>대표 : 노규호 외 4명</FooterInfoText>
                <FooterInfoText>사업자등록번호 : 123-45-67890</FooterInfoText>
              </FooterInfoRow>
              <FooterInfoRow>
                <FooterInfoText>주소 : 서울특별시 마포구 백범로 130</FooterInfoText>
                <FooterInfoText>광고·제휴문의 : code-kine@gmail.com</FooterInfoText>
              </FooterInfoRow>
            </FooterInfoSection>
            <SocialIcons>
              <SocialBtn><SocialLabel>YT</SocialLabel></SocialBtn>
              <SocialBtn><SocialLabel>N</SocialLabel></SocialBtn>
              <SocialBtn><SocialLabel>IG</SocialLabel></SocialBtn>
            </SocialIcons>
          </FooterBottom>
        </FooterInner>
      </Footer>
    </PageWrapper>
  );
};

export default UserProfile;
