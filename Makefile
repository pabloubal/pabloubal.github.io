.PHONY: serve serve-all install

# Install dependencies
install:
	bundle install

# Start Jekyll server on localhost
serve:
	bundle exec jekyll serve

# Start Jekyll server on all interfaces
serve-all:
	bundle exec jekyll serve --host 0.0.0.0

# Default target
default: serve
