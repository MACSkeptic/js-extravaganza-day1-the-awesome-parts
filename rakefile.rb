require 'rubygems'
require 'rake'

SLIDES_JS = 'js/presentation_slides.js'

def all_slides 
  @all_slides ||= Dir['slides/*.html'].collect { |x| x.gsub(/\\/, '/').split('/').last } #just in case
   #select { |x| puts x + '-----' + File.directory?(x); !File.directory?(x) && !(/.swp$/ =~ x) }.
end

def all_slides_js
  @all_slides_js ||= all_slides.sort.inject('') {|buffer, curr| buffer << "list.push('#{curr}');\n" }
end

def read_slides_js
  @read_slides_js ||= File.read SLIDES_JS 
end

def write_slides_js
  contents = read_slides_js 
  contents =~ %r!^(\s+)//awesomeness//!
  spaces = '\1'
  total_slides = 0
  puts all_slides.collect {|x| total_slides += 1; '- ' + x; }
  puts "Total: #{total_slides}"
  contents.gsub!(
    %r!//awesomeness//(.|\s|\n|\w|\d|;)+?//awesomeness//!,
    "//awesomeness//#{("\n" + all_slides_js).gsub(%r!\n!, "\n" + spaces)}//awesomeness//")
  File.open(SLIDES_JS, 'w') do |f|
    f.write contents
  end
end

task :list do
  puts '== Added the following slides: '
  write_slides_js 
end
