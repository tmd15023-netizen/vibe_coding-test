(function () {
  'use strict';

  // 문의 채널 링크 적용 (blog-links.js)
  function applyContactLinks() {
    if (!window.BLOG || !window.BLOG.contact) return;
    var c = window.BLOG.contact;

    document.querySelectorAll('[data-contact]').forEach(function (el) {
      var key = el.dataset.contact;
      var value = c[key];
      if (!value) return;

      if (key === 'phone') {
        el.href = 'tel:' + value.replace(/-/g, '');
      } else {
        el.href = value;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      }
    });
  }

  applyContactLinks();

  // Mobile sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('mobileMenuBtn');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  // Close sidebar on link click (mobile)
  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        closeSidebar();
      }
    });
  });

  // Sidebar filter for program cards
  const filterLinks = sidebar.querySelectorAll('[data-filter]');
  const programItems = document.querySelectorAll('.program-item');

  filterLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const filter = link.dataset.filter;
      if (!filter) return;

      filterLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      programItems.forEach(function (item) {
        if (item.dataset.category === filter) {
          item.classList.add('highlight');
          item.classList.remove('dimmed');
        } else {
          item.classList.remove('highlight');
          item.classList.add('dimmed');
        }
      });

      setTimeout(function () {
        document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  });

  // Content tabs — blog-links.js 데이터 사용
  const contentData = window.BLOG ? window.BLOG.contents : {};

  const tabs = document.querySelectorAll('.content-tab');
  const contentList = document.getElementById('contentList');

  function getPostUrl(item) {
    if (!window.BLOG) return '#';
    if (item.url && /^\d+$/.test(String(item.url))) {
      return window.BLOG.post(item.url);
    }
    return item.url || '#';
  }

  function renderContent(tabKey) {
    const items = contentData[tabKey] || contentData.ai || [];
    contentList.innerHTML = items.map(function (item) {
      return (
        '<a href="' + getPostUrl(item) + '" target="_blank" rel="noopener noreferrer" class="content-item">' +
          '<span class="content-tag">' + item.tag + '</span>' +
          '<h3>' + item.title + '</h3>' +
          '<time>' + item.date + '</time>' +
        '</a>'
      );
    }).join('');
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderContent(tab.dataset.tab);
    });
  });

  // Search form — 블로그 내 검색으로 이동
  document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var query = e.target.querySelector('.search-input').value.trim();
    if (query && window.BLOG) {
      window.open(window.BLOG.search(query), '_blank', 'noopener,noreferrer');
    }
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    e.target.reset();
  });

  // Stats counter animation on scroll
  var statsAnimated = false;
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');

  function animateStats() {
    if (statsAnimated) return;
    var statsSection = document.getElementById('stats');
    if (!statsSection) return;

    var rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      statsAnimated = true;
      statNumbers.forEach(function (el) {
        var target = parseInt(el.dataset.count, 10);
        var current = 0;
        var step = Math.ceil(target / 40);
        var timer = setInterval(function () {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + '+';
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', animateStats);
  animateStats();

  // Update page title bar on scroll
  var sections = [
    { id: 'programs', breadcrumb: '교육 프로그램', title: '대표 교육 분야' },
    { id: 'cases', breadcrumb: '수업 사례', title: '실제 현장 교육 후기' },
    { id: 'stats', breadcrumb: '교육 후기', title: '숫자로 보는 쑹쌤' },
    { id: 'contents', breadcrumb: 'AI·코딩 콘텐츠', title: '전문 콘텐츠' },
    { id: 'about', breadcrumb: '쑹쌤 소개', title: 'AI·SW 교육 전문가' },
    { id: 'contact', breadcrumb: '교육 문의', title: '강의 문의하기' }
  ];

  var breadcrumbEl = document.querySelector('.page-breadcrumb');
  var pageTitleEl = document.querySelector('.page-title');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 120;
    var current = sections[0];

    sections.forEach(function (section) {
      var el = document.getElementById(section.id);
      if (el && el.offsetTop <= scrollY) {
        current = section;
      }
    });

    if (breadcrumbEl) breadcrumbEl.textContent = current.breadcrumb;
    if (pageTitleEl) pageTitleEl.textContent = current.title;
  });

  // Reset program card filter when clicking section title
  document.querySelector('#programs .section-title').addEventListener('click', function () {
    filterLinks.forEach(function (l) { l.classList.remove('active'); });
    programItems.forEach(function (item) {
      item.classList.remove('highlight', 'dimmed');
    });
  });
})();
