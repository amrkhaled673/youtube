// Sample video data with actual video URLs
const videos = [
    {
        id: 1,
        title: "تعلم البرمجة من الصفر - دورة شاملة",
        channel: "قناة التقنية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: "15:30",
        views: "1.2M",
        uploadDate: "منذ 3 أيام",
        subscribers: "500K مشترك",
        description: "في هذا الفيديو سنتعلم أساسيات البرمجة من البداية حتى الاحتراف. سنغطي جميع المفاهيم الأساسية والمتقدمة في البرمجة."
    },
    {
        id: 2,
        title: "أفضل الوصفات العربية التقليدية",
        channel: "مطبخ أم أحمد",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample2/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        duration: "22:45",
        views: "850K",
        uploadDate: "منذ أسبوع",
        subscribers: "300K مشترك",
        description: "تعلمي معنا أشهى الوصفات العربية التقليدية بطريقة سهلة ومبسطة. وصفات مجربة ومضمونة النتائج."
    },
    {
        id: 3,
        title: "أخبار التقنية - آخر التطورات في عالم الذكاء الاصطناعي",
        channel: "أخبار التقنية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample3/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        duration: "18:20",
        views: "2.1M",
        uploadDate: "منذ يوم واحد",
        subscribers: "1.2M مشترك",
        description: "آخر الأخبار والتطورات في عالم التقنية والذكاء الاصطناعي. تحليل شامل للتطورات الجديدة وتأثيرها على المستقبل."
    },
    {
        id: 4,
        title: "رحلة سياحية إلى دبي - أجمل الأماكن السياحية",
        channel: "عالم السفر",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample4/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        duration: "25:10",
        views: "650K",
        uploadDate: "منذ 5 أيام",
        subscribers: "400K مشترك",
        description: "جولة شاملة في أجمل الأماكن السياحية في دبي. نصائح مهمة للسفر والإقامة والأنشطة الترفيهية."
    },
    {
        id: 5,
        title: "تمارين رياضية منزلية للمبتدئين",
        channel: "اللياقة البدنية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample5/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        duration: "30:00",
        views: "1.5M",
        uploadDate: "منذ أسبوعين",
        subscribers: "800K مشترك",
        description: "مجموعة من التمارين الرياضية البسيطة التي يمكن ممارستها في المنزل بدون معدات. مناسبة للمبتدئين."
    },
    {
        id: 6,
        title: "تعلم اللغة الإنجليزية - المحادثة اليومية",
        channel: "تعلم الإنجليزية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample6/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        duration: "20:15",
        views: "900K",
        uploadDate: "منذ 4 أيام",
        subscribers: "600K مشترك",
        description: "تعلم المحادثة الإنجليزية اليومية مع أمثلة عملية وتطبيقات مفيدة. طريقة سهلة وممتعة لتحسين مستواك."
    },
    {
        id: 7,
        title: "موسيقى عربية هادئة للاسترخاء",
        channel: "الموسيقى العربية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample7/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        duration: "45:30",
        views: "3.2M",
        uploadDate: "منذ شهر",
        subscribers: "1.5M مشترك",
        description: "مجموعة من أجمل الموسيقى العربية الهادئة للاسترخاء والتأمل. موسيقى مناسبة للدراسة والعمل."
    },
    {
        id: 8,
        title: "ألعاب فيديو جديدة - مراجعة شاملة",
        channel: "عالم الألعاب",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample8/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        duration: "35:20",
        views: "1.8M",
        uploadDate: "منذ يومين",
        subscribers: "950K مشترك",
        description: "مراجعة شاملة لأحدث الألعاب المتوفرة في السوق. تقييم الجرافيك واللعب والقصة."
    },
    {
        id: 9,
        title: "نصائح للنجاح في الحياة المهنية",
        channel: "التطوير المهني",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample9/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        duration: "28:45",
        views: "750K",
        uploadDate: "منذ 6 أيام",
        subscribers: "350K مشترك",
        description: "نصائح مهمة للنجاح في الحياة المهنية وتطوير المهارات الشخصية. خبرات عملية من خبراء في المجال."
    },
    {
        id: 10,
        title: "وثائقي: تاريخ الحضارة العربية",
        channel: "الوثائقيات العربية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample10/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        duration: "52:30",
        views: "1.1M",
        uploadDate: "منذ أسبوع",
        subscribers: "700K مشترك",
        description: "وثائقي شامل عن تاريخ الحضارة العربية وإنجازاتها عبر التاريخ. رحلة عبر الزمن لاستكشاف التراث العربي."
    },
    {
        id: 11,
        title: "كوميديا عربية - أطرف المواقف",
        channel: "الكوميديا العربية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample11/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        duration: "12:20",
        views: "2.5M",
        uploadDate: "منذ 3 أيام",
        subscribers: "1.8M مشترك",
        description: "مجموعة من أطرف المواقف الكوميدية العربية. محتوى ترفيهي مناسب لجميع أفراد العائلة."
    },
    {
        id: 12,
        title: "رياضة كرة القدم - أهداف الأسبوع",
        channel: "الرياضة العربية",
        channelAvatar: "https://via.placeholder.com/48",
        thumbnail: "https://i.ytimg.com/vi/sample12/maxresdefault.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        duration: "8:45",
        views: "1.9M",
        uploadDate: "منذ يوم واحد",
        subscribers: "1.3M مشترك",
        description: "أجمل أهداف الأسبوع من الدوريات العربية والعالمية. تحليل فني للأهداف والمهارات."
    }
];

// Global variables
let currentVideo = null;
let isSidebarOpen = true;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    generateVideoGrid();
});

function initializeApp() {
    // Set initial sidebar state
    updateSidebarState();
}

function setupEventListeners() {
    // Menu button toggle
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', toggleSidebar);

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(e.target.value);
        }
    });
    
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    // Voice search
    const voiceSearchBtn = document.querySelector('.voice-search-btn');
    voiceSearchBtn.addEventListener('click', () => {
        showNotification('البحث الصوتي غير متاح حالياً', 'info');
    });

    // Category chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            // Remove active class from all chips
            chips.forEach(c => c.classList.remove('active'));
            // Add active class to clicked chip
            e.target.classList.add('active');
            
            const category = e.target.textContent;
            filterVideosByCategory(category);
        });
    });

    // Sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.currentTarget.classList.add('active');
            
            const linkText = e.currentTarget.querySelector('span').textContent;
            showNotification(`تم النقر على: ${linkText}`, 'info');
        });
    });

    // Video modal close
    const closeModal = document.getElementById('closeModal');
    const videoModal = document.getElementById('videoModal');
    
    closeModal.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Header buttons
    const headerBtns = document.querySelectorAll('.header-btn');
    headerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i').className;
            if (icon.includes('video')) {
                showNotification('إنشاء فيديو جديد', 'info');
            } else if (icon.includes('th')) {
                showNotification('تطبيقات يوتيوب', 'info');
            } else if (icon.includes('bell')) {
                showNotification('الإشعارات', 'info');
            }
        });
    });

    // Subscribe button
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('subscribe-btn')) {
            const isSubscribed = e.target.textContent === 'ملغي الاشتراك';
            e.target.textContent = isSubscribed ? 'اشتراك' : 'ملغي الاشتراك';
            e.target.style.backgroundColor = isSubscribed ? '#cc0000' : '#272727';
            showNotification(isSubscribed ? 'تم إلغاء الاشتراك' : 'تم الاشتراك في القناة!', 'success');
        }
    });
}

function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    updateSidebarState();
}

function updateSidebarState() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    if (window.innerWidth <= 768) {
        // Mobile behavior
        sidebar.classList.toggle('mobile-open', isSidebarOpen);
    } else {
        // Desktop behavior
        sidebar.classList.toggle('collapsed', !isSidebarOpen);
        content.classList.toggle('expanded', !isSidebarOpen);
    }
}

function generateVideoGrid() {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';

    videos.forEach(video => {
        const videoElement = createVideoElement(video);
        videoGrid.appendChild(videoElement);
    });
}

function createVideoElement(video) {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-item';
    videoDiv.onclick = () => openVideoModal(video);
    
    videoDiv.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/320x180?text=فيديو'">
            <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-info">
            <img src="${video.channelAvatar}" alt="${video.channel}" class="channel-avatar-small" onerror="this.src='https://via.placeholder.com/36'">
            <div class="video-details">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-channel">${video.channel}</div>
                <div class="video-meta">${video.views} مشاهدة • ${video.uploadDate}</div>
            </div>
        </div>
    `;

    return videoDiv;
}

function openVideoModal(video) {
    currentVideo = video;
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Set video source
    videoPlayer.src = video.videoUrl;
    
    // Update modal content
    document.getElementById('modalVideoTitle').textContent = video.title;
    document.getElementById('modalVideoViews').textContent = `${video.views} مشاهدة`;
    document.getElementById('modalVideoDate').textContent = video.uploadDate;
    document.getElementById('modalChannelAvatar').src = video.channelAvatar;
    document.getElementById('modalChannelName').textContent = video.channel;
    document.getElementById('modalChannelSubs').textContent = video.subscribers;
    document.getElementById('modalVideoDescription').textContent = video.description;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto play video
    setTimeout(() => {
        videoPlayer.play().catch(e => {
            console.log('Auto-play prevented:', e);
            showNotification('اضغط على زر التشغيل لبدء الفيديو', 'info');
        });
    }, 500);
    
    showNotification('تم تحميل الفيديو بنجاح!', 'success');
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Pause and reset video
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.src = '';
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    currentVideo = null;
}

function performSearch(query) {
    if (!query.trim()) {
        generateVideoGrid();
        return;
    }
    
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displayFilteredVideos(filteredVideos);
    showNotification(`تم العثور على ${filteredVideos.length} نتيجة`, 'info');
}

function filterVideosByCategory(category) {
    if (category === 'الكل') {
        generateVideoGrid();
        return;
    }
    
    // Simple category filtering based on keywords
    const categoryKeywords = {
        'الموسيقى': ['موسيقى', 'أغاني'],
        'الألعاب': ['ألعاب', 'لعبة', 'جيمز'],
        'الأخبار': ['أخبار', 'خبر'],
        'الرياضة': ['رياضة', 'كرة', 'تمارين'],
        'التعليم': ['تعلم', 'تعليم', 'دورة'],
        'الطبخ': ['طبخ', 'وصفات', 'مطبخ'],
        'السفر': ['سفر', 'رحلة', 'سياحة'],
        'التقنية': ['تقنية', 'برمجة', 'ذكاء'],
        'الكوميديا': ['كوميديا', 'مضحك', 'طريف']
    };
    
    const keywords = categoryKeywords[category] || [category];
    const filteredVideos = videos.filter(video => 
        keywords.some(keyword => 
            video.title.includes(keyword) || 
            video.channel.includes(keyword) ||
            video.description.includes(keyword)
        )
    );
    
    displayFilteredVideos(filteredVideos);
    showNotification(`عرض فيديوهات فئة: ${category}`, 'info');
}

function displayFilteredVideos(filteredVideos) {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        videoGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #aaaaaa;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب البحث بكلمات مختلفة</p>
            </div>
        `;
        return;
    }
    
    filteredVideos.forEach(video => {
        const videoElement = createVideoElement(video);
        videoGrid.appendChild(videoElement);
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0000' : '#1c62b9'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 4000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle window resize
window.addEventListener('resize', () => {
    updateSidebarState();
});

// Video player event listeners
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.addEventListener('loadstart', () => {
        showNotification('جاري تحميل الفيديو...', 'info');
    });
    
    videoPlayer.addEventListener('canplay', () => {
        showNotification('الفيديو جاهز للتشغيل', 'success');
    });
    
    videoPlayer.addEventListener('error', (e) => {
        showNotification('خطأ في تحميل الفيديو', 'error');
        console.error('Video error:', e);
    });
    
    videoPlayer.addEventListener('ended', () => {
        showNotification('انتهى الفيديو', 'info');
        // Could suggest next video here
    });
});

// Action buttons functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.action-btn')) {
        const btn = e.target.closest('.action-btn');
        const action = btn.querySelector('span').textContent;
        
        switch(action) {
            case 'إعجاب':
                btn.style.color = btn.style.color === 'rgb(28, 98, 185)' ? '#ffffff' : '#1c62b9';
                showNotification('تم الإعجاب بالفيديو', 'success');
                break;
            case 'عدم إعجاب':
                btn.style.color = btn.style.color === 'rgb(255, 0, 0)' ? '#ffffff' : '#ff0000';
                showNotification('تم عدم الإعجاب', 'info');
                break;
            case 'مشاركة':
                showNotification('تم نسخ رابط الفيديو', 'success');
                break;
            case 'تحميل':
                showNotification('بدء تحميل الفيديو...', 'info');
                break;
            case 'حفظ':
                showNotification('تم حفظ الفيديو في قائمة المشاهدة لاحقاً', 'success');
                break;
        }
    }
});

// Comment functionality
document.addEventListener('keypress', (e) => {
    if (e.target.classList.contains('comment-input') && e.key === 'Enter') {
        const comment = e.target.value.trim();
        if (comment) {
            addComment(comment);
            e.target.value = '';
        }
    }
});

function addComment(commentText) {
    const commentsList = document.querySelector('.comments-list');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <img src="https://via.placeholder.com/40" alt="User" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">أنت</span>
                <span class="comment-time">الآن</span>
            </div>
            <p class="comment-text">${commentText}</p>
            <div class="comment-actions">
                <button class="comment-action">
                    <i class="fas fa-thumbs-up"></i>
                    <span>0</span>
                </button>
                <button class="comment-action">
                    <i class="fas fa-thumbs-down"></i>
                </button>
                <button class="comment-action">رد</button>
            </div>
        </div>
    `;
    
    commentsList.insertBefore(newComment, commentsList.firstChild);
    showNotification('تم إضافة التعليق بنجاح!', 'success');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('YouTube clone initialized successfully!');
    showNotification('مرحباً بك في يوتيوب!', 'success');
});
