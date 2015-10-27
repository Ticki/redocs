(function() {var implementors = {};
implementors['redox'] = ["impl&lt;T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/binary_heap/struct.BinaryHeap.html' title='core_collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/binary_heap/struct.BinaryHeap.html' title='core_collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a + <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a></span>","impl&lt;K, V&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;(K, V)&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/btree/map/struct.BTreeMap.html' title='core_collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;(&amp;'a K, &amp;'a V)&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/btree/map/struct.BTreeMap.html' title='core_collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a>, V: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a></span>","impl&lt;T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/btree/set/struct.BTreeSet.html' title='core_collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/btree/set/struct.BTreeSet.html' title='core_collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a + <a class='trait' href='redox/cmp/trait.Ord.html' title='redox::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/enum_set/struct.EnumSet.html' title='core_collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core_collections/enum_set/trait.CLike.html' title='core_collections::enum_set::CLike'>CLike</a></span>","impl&lt;'a, E&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a E&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/enum_set/struct.EnumSet.html' title='core_collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a + <a class='trait' href='https://doc.rust-lang.org/nightly/core_collections/enum_set/trait.CLike.html' title='core_collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/linked_list/struct.LinkedList.html' title='core_collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/linked_list/struct.LinkedList.html' title='core_collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a</span>","impl <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;char&gt; for <a class='struct' href='redox/string/struct.String.html' title='redox::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a char&gt; for <a class='struct' href='redox/string/struct.String.html' title='redox::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a str&gt; for <a class='struct' href='redox/string/struct.String.html' title='redox::string::String'>String</a>","impl <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;<a class='struct' href='redox/string/struct.String.html' title='redox::string::String'>String</a>&gt; for <a class='struct' href='redox/string/struct.String.html' title='redox::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='redox/struct.Vec.html' title='redox::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='redox/struct.Vec.html' title='redox::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/vec_deque/struct.VecDeque.html' title='core_collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='redox/iter/trait.Extend.html' title='redox::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/core_collections/vec_deque/struct.VecDeque.html' title='core_collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='redox/marker/trait.Copy.html' title='redox::marker::Copy'>Copy</a> + 'a</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
