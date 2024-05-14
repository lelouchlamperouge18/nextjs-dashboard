'use client';

import { List, Pagination } from 'antd';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';
import Image from 'next/image';
import ListVenues from '@/app/mock/venue.json';
import DefaultVenue from '@/public/default-venue.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = ListVenues.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <h1 className={`${lusitana.className} mb-6 text-xl md:text-2xl`}>
        List Venues
      </h1>
      <div className="relative flex flex-1 flex-shrink-0 mb-6">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search venue..."
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '16px',
          paddingTop: '20px',
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={['3', '5', '10', '20']}
          total={filteredData.length}
          style={{ marginBottom: '16px' }}
        />
      </div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={paginatedData}
        renderItem={(item) => (
          <div className="pb-6">
            <div className="flex">
              <Image
                src={item.photo_url || DefaultVenue}
                className="max-h-[100px]"
                alt="venue-photo"
                width="100"
                height="100"
              />
              <div className="px-4">
                <div className="cursor-pointer font-semibold text-[#ff006e]">
                  {item.name}
                </div>
                <div>{item.bio}</div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
