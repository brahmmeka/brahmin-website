/**
 * Sample blog posts shown when Sanity is not yet configured.
 * Once NEXT_PUBLIC_SANITY_PROJECT_ID is set and you have real posts,
 * these are replaced automatically by live Sanity data.
 */

import type { PostSummary, Post } from './sanity'

export const SAMPLE_POSTS: PostSummary[] = [
  {
    _id: 'sample-1',
    title: 'How Sfoglini Pasta Avoided $87,500 in Recall Costs with Lot Traceability',
    slug: { current: 'sfoglini-pasta-lot-traceability-recall-costs' },
    excerpt: 'When a supplier flagged a potential contamination issue, Sfoglini needed answers fast. With Brahmin\'s lot traceability, they ran a full trace in under 5 minutes and confirmed zero affected product had shipped.',
    publishedAt: '2025-11-15T00:00:00Z',
    categories: ['customer-stories', 'food-beverage'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
  {
    _id: 'sample-2',
    title: '5 Signs You\'ve Outgrown Your Spreadsheets (And What to Do About It)',
    slug: { current: '5-signs-outgrown-spreadsheets' },
    excerpt: 'Every manufacturer starts with spreadsheets. But at some point, they stop being a tool and start being a liability. Here\'s how to know when you\'ve hit that wall—and what the transition to real MRP software looks like.',
    publishedAt: '2025-10-28T00:00:00Z',
    categories: ['inventory-management', 'industry-tips'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
  {
    _id: 'sample-3',
    title: 'QuickBooks + Brahmin: The Integration Setup Guide for Manufacturers',
    slug: { current: 'quickbooks-brahmin-integration-setup-guide' },
    excerpt: 'Two-way sync between Brahmin and QuickBooks means your invoices, purchase orders, and COGS flow automatically—no double entry, no month-end reconciliation nightmare. Here\'s exactly how it works.',
    publishedAt: '2025-10-10T00:00:00Z',
    categories: ['integrations'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
  {
    _id: 'sample-4',
    title: 'What Is MRP Software? A Plain-English Guide for Small Manufacturers',
    slug: { current: 'what-is-mrp-software-guide' },
    excerpt: 'MRP stands for Materials Requirements Planning—but that acronym doesn\'t tell you much. This guide explains what MRP software actually does, who needs it, and how to evaluate whether it\'s right for your business.',
    publishedAt: '2025-09-20T00:00:00Z',
    categories: ['manufacturing', 'industry-tips'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
  {
    _id: 'sample-5',
    title: 'B2B Customer Portal 101: Let Your Wholesale Customers Order 24/7',
    slug: { current: 'b2b-customer-portal-wholesale-manufacturers' },
    excerpt: 'If your wholesale customers are still calling or emailing to place orders, you\'re leaving money on the table—and burning your team\'s time. Here\'s what a B2B portal changes, and how to set one up.',
    publishedAt: '2025-09-05T00:00:00Z',
    categories: ['inventory-management'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
  {
    _id: 'sample-6',
    title: 'Multi-Location Inventory Management: A Guide for Growing Manufacturers',
    slug: { current: 'multi-location-inventory-management-guide' },
    excerpt: 'Managing inventory across multiple warehouses, 3PLs, and co-manufacturers is one of the biggest operational challenges for growing brands. This guide covers the systems and processes that make it manageable.',
    publishedAt: '2025-08-18T00:00:00Z',
    categories: ['inventory-management', 'manufacturing'],
    author: { name: 'Brahmin Team', role: 'Content Team' },
  },
]

export const SAMPLE_POST_FULL: Post = {
  ...SAMPLE_POSTS[0],
  body: [
    {
      _type: 'block',
      _key: 'intro',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "In October 2024, Sfoglini Pasta received a call from one of their flour suppliers. A batch of semolina—the same variety used across several of Sfoglini's most popular pasta SKUs—had tested positive for elevated mycotoxin levels. The question was immediate: had any of it shipped?",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'p2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "In the old world—spreadsheets, paper records, manual lot tracking—answering that question could take two full days and involve pulling invoices, cross-referencing shipping records, and calling distributors. Every hour of uncertainty means potential FDA liability, potential product on shelves that shouldn't be.",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'h2-1',
      style: 'h2',
      children: [{ _type: 'span', text: 'The 5-Minute Recall Trace' }],
    },
    {
      _type: 'block',
      _key: 'p3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "With Brahmin, Sfoglini's operations manager ran a lot trace in under 5 minutes. She searched by supplier lot number, identified every production run that used that flour batch, and pulled a complete forward trace showing every order those batches had shipped in—with customer names, quantities, and ship dates.",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'callout-1',
      _type_: 'callout',
      type: 'tip',
      text: "The result: zero affected product had left the facility. The flour was still in-house, held in receiving. Sfoglini placed an inventory hold, returned the batch to the supplier, and avoided an estimated $87,500 in recall costs.",
    },
    {
      _type: 'block',
      _key: 'h2-2',
      style: 'h2',
      children: [{ _type: 'span', text: 'What Full Lot Traceability Actually Means' }],
    },
    {
      _type: 'block',
      _key: 'p4',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Lot traceability isn't just knowing which lot a product came from. True traceability means being able to answer two questions instantly:",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'p5',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: "1. Forward trace:",
        },
        {
          _type: 'span',
          text: " Starting from a raw material or ingredient lot, where did it go? Which finished goods were made with it? Which customers received those goods?",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'p6',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: "2. Backward trace:",
        },
        {
          _type: 'span',
          text: " Starting from a finished good or customer complaint, what raw materials were used? Which suppliers provided them? What other products used the same inputs?",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'h2-3',
      style: 'h2',
      children: [{ _type: 'span', text: 'How Brahmin Handles It' }],
    },
    {
      _type: 'block',
      _key: 'p7',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "When Sfoglini receives a delivery of flour, they scan the supplier lot number into Brahmin during the receiving process. That lot number follows the material through every step: into storage, into a production work order, into finished goods inventory, and onto outbound shipments.",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'p8',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "The result is a complete, unbroken chain of custody. No manual data entry at each step—the lot assignment happens automatically as part of normal production workflow.",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'h2-4',
      style: 'h2',
      children: [{ _type: 'span', text: 'Is Your Operation Recall-Ready?' }],
    },
    {
      _type: 'block',
      _key: 'p9',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "If you can't answer 'which customers received product made with supplier lot X?' in under 10 minutes, you're not recall-ready. For food, beverage, supplement, and cosmetics manufacturers, that's a liability—regulatory and financial.",
        },
      ],
    },
    {
      _type: 'block',
      _key: 'p10',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Brahmin's lot traceability is included on Growth and Scale plans. If you'd like to see a demo of the recall trace workflow with your actual products, ",
        },
        {
          _type: 'span',
          marks: ['strong'],
          text: "book a 30-minute demo",
        },
        {
          _type: 'span',
          text: " and we'll walk through it with your specific use case.",
        },
      ],
    },
  ],
  seo: {
    metaTitle: 'How Sfoglini Pasta Avoided $87,500 in Recall Costs | Brahmin Solutions',
    metaDescription: "Sfoglini Pasta used Brahmin's lot traceability to run a full supplier recall trace in under 5 minutes, avoiding an estimated $87,500 in costs.",
  },
}
