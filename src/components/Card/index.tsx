'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'border-2 border-border rounded-xl overflow-hidden bg-card hover:cursor-pointer',
        'dark:shadow-[4px_4px_0px_0px_rgba(150,223,234,0.3)]', // cyan glow in dark
        'shadow-[4px_4px_0px_0px_rgba(37,62,85,1)]', // dark shadow in light
        'hover:shadow-[2px_2px_0px_0px_rgba(37,62,85,1)] hover:translate-x-[2px] hover:translate-y-[2px]',
        'dark:hover:shadow-[2px_2px_0px_0px_rgba(150,223,234,0.3)]',
        'transition-all duration-150',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {!metaImage && <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">No image</div>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="p-6">
        {showCategories && hasCategories && (
          <div className="text-xs font-bold uppercase mb-3 text-primary">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category
                const categoryTitle = titleFromCategory || 'Untitled category'
                const isLast = index === categories.length - 1

                return (
                  <Fragment key={index}>
                    {categoryTitle}
                    {!isLast && <Fragment>, &nbsp;</Fragment>}
                  </Fragment>
                )
              }
              return null
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="text-xl font-bold mb-2">
            <Link href={href} ref={link.ref} className="hover:text-primary transition-colors">
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {sanitizedDescription}
          </p>
        )}
      </div>
    </article>
  )
}