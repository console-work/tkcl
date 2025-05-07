'use client';

import BlogHeader from './blogHeader';
import { useMemo } from 'react';
import Link from 'next/link';
import { BsCalendar3 } from 'react-icons/bs';

import LocalDataFor2D from '../../../public/data/blog2D.json';
import Footer2D from '@/component2d/footer2D/footer2D';

const Blog2D = () => {
  const blogs2D = useMemo(() => {
    return LocalDataFor2D
      .map((item) => ({
        ...item,
        slug: item.title
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, ''),
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  return (
    <>
      <BlogHeader btnColor2d={true} />
      <div className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs2D.map((items, index) => (
              <Link
                href={`/blog/${items.slug}`}
                key={index}
                aria-label="2D blog details"
              >
                <div className="card_of_blog justify-center border-0 p-0">
                  <div className="cardImage">
                    <img src={items.thumb} alt={items.title} />
                  </div>
                  <div className="cardCaption ps-4 pt-5 pb-5 pe-5">
                    <p className="cardTitle">{items.title}</p>
                    <p className="cardDes">{items.metaDescription}</p>
                    <div className="readAndDate">
                      <button>
                        Read More
                        <div className="center-con">
                          <div className="round">
                            <div id="cta">
                              <span className="arrow primera next"></span>
                              <span className="arrow segunda next"></span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <p className="date">
                        <BsCalendar3 className="inline mr-1" />
                        {items.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer2D/>
    </>
  );
};

export default Blog2D;
