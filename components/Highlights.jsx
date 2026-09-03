'use client'

const Highlights = () => {
  return (
    <section id="highlights" className="highlight_section">
      <style jsx>{`
        .highlight_section {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        
        .highlight_section .parallax {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: url('/images/highlights/highlight.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .highlight_section .container-fluid {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin: 0 auto;
        }

        .highlight_section .heading {
          color: #F7A800;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 500;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .02em;
          margin-bottom: 50px; /* Increased from 30px */
        }

        .highlight_section ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
        }

        .highlight_section ul li {
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px; /* Increased from 28px */
          margin-bottom: 28px; /* Increased from 20px */
          color: #F8F9FA;
          font-family: "Poppins", sans-serif;
          position: relative;
          padding-left: 50px; /* Increased from 44px */
        }

        .highlight_section ul li:before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #F8F9FA;
          font-size: 20px;
          font-weight: 300;
        }

        .box_left, .box_right {
          padding: 8% 8%; /* Increased top/bottom from 5% to 8% */
        }

        .box_right {
          border-left: 1px solid #ffffff3b;
        }

        @media (max-width: 991px) {
          .highlight_section .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .box_left, .box_right {
            padding: 40px 20px;
          }
          .box_right {
            border-left: none;
            border-top: 1px solid #ffffff3b;
          }
          .highlight_section ul li {
            font-size: 16px;
            line-height: 26px;
          }
        }
      `}</style>

      {/* Parallax Background with fixed attachment for layer effect */}
      <div className="parallax"></div>

      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#F7A800] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#0075B3]"></div>
          <div className="w-2 h-2 rounded-full bg-[#0075B3] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#0075B3]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/20 rounded-[20px] mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ position: 'relative' }}>
          
          {/* Corner Accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '24px', height: '24px', borderTop: '1.5px solid #F7A800', borderLeft: '1.5px solid #F7A800', borderTopLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', top: -1, right: -1, width: '24px', height: '24px', borderTop: '1.5px solid #F7A800', borderRight: '1.5px solid #F7A800', borderTopRightRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #F7A800', borderLeft: '1.5px solid #F7A800', borderBottomLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #F7A800', borderRight: '1.5px solid #F7A800', borderBottomRightRadius: '20px' }}></div>          {/* Item 1: 3 & 4 BHK Residences */}
          <div className="p-10 border-b lg:border-b border-white/20 lg:border-r flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">EXCLUSIVE 3 & 4 BHK HOMES</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Thoughtfully planned 3 & 4 BHK residences ranging from 2,250 – 4,695 sq. ft. with expansive decks</p>
          </div>

          {/* Item 2: 4 Towers & 30 Storeys */}
          <div className="p-10 border-b lg:border-b border-white/20 lg:border-r flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="8" height="18" rx="1"></rect>
                <rect x="13" y="7" width="8" height="14" rx="1"></rect>
                <line x1="6" y1="7" x2="8" y2="7"></line>
                <line x1="6" y1="11" x2="8" y2="11"></line>
                <line x1="6" y1="15" x2="8" y2="15"></line>
                <line x1="16" y1="11" x2="18" y2="11"></line>
                <line x1="16" y1="15" x2="18" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">4 TOWERS & 30 STOREYS</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Low-density luxury development comprising 4 iconic G+30 towers with only 516 exclusive residences</p>
          </div>

          {/* Item 3: 5.24-Acre Green Community */}
          <div className="p-10 border-b lg:border-b border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-6"></path>
                <path d="M17 8C17 4.5 14.5 2 12 2S7 4.5 7 8c-2.5 0-4.5 2-4.5 4.5 0 2 1.5 3.5 3.5 3.5h12c2 0 3.5-1.5 3.5-3.5C21.5 10 19.5 8 17 8z"></path>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">5.24-ACRE GREEN COMMUNITY</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Spread across a sprawling 5.24-acre estate, offering abundant open spaces, central courtyard & lush greenery</p>
          </div>

          {/* Item 4: Prime Location */}
          <div className="p-10 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">PRIME LOCATION</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Prime Rajendra Nagar location with 10-minute access to RGIA Airport, PVNR Expressway, and ORR Exit 16</p>
          </div>

          {/* Item 5: Grand Clubhouse & Amenities */}
          <div className="p-10 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">GRAND CLUBHOUSE & AMENITIES</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">State-of-the-art multi-level clubhouse featuring an infinity pool, temple, banquet lounge, and kids play area</p>
          </div>

          {/* Item 6: IT Hub Connectivity */}
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F7A800' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
            <h3 className="text-[#F7A800] font-bold text-[15px] uppercase tracking-wider mb-3">SEAMLESS IT HUB CONNECTIVITY</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Quick 30-minute commute to Hyderabad’s major commercial hubs including Financial District, Gachibowli & HITEC City</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Highlights
