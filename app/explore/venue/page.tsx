'use client';

import { List, Pagination, Tag, Button } from 'antd';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';
import Image from 'next/image';
import ListVenues from '@/app/mock/venue.json';
import DefaultVenue from '@/public/default-venue.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setKeywords([...keywords, searchQuery.trim()]);
      setSearchQuery('');
    }
  };

  const handleClearSearch = () => {
    setKeywords([]);
    setSearchQuery('');
  };

  const handleSort = (order: 'asc' | 'desc' | null) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const filteredData = ListVenues.filter((item) => {
    return keywords.every(
      (keyword) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.bio.toLowerCase().includes(keyword.toLowerCase()),
    );
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'desc') {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div>
      <h1 className={`${lusitana.className} mb-6 text-xl md:text-2xl`}>
        List Venues
      </h1>
      <div className="relative mb-3 flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress}
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search venue..."
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <div className="mt-4 mb-2 flex flex-wrap items-center gap-2">
        {keywords.length > 0 && <div className="text-sm font-medium">Keywords:</div>}
        {keywords.map((keyword, index) => (
          <Tag
            key={index}
            closable
            onClose={() => setKeywords(keywords.filter((k) => k !== keyword))}
          >
            {keyword}
          </Tag>
        ))}
        {keywords.length > 0 && (
          <div onClick={handleClearSearch} className="text-sm text-[#ff006e] cursor-pointer hover:underline">
            Clear Search
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <Button
            onClick={() => handleSort(null)}
            className={classNames({ 'bg-gray-300': sortOrder === null })}
          >
            Default
          </Button>
          <Button
            onClick={() => handleSort('asc')}
            className={classNames('ml-2', { 'bg-gray-300': sortOrder === 'asc' })}
          >
            A-Z
          </Button>
          <Button
            onClick={() => handleSort('desc')}
            className={classNames('ml-2', { 'bg-gray-300': sortOrder === 'desc' })}
          >
            Z-A
          </Button>
        </div>
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
                className="max-h-[100px] min-w-[100px]"
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
