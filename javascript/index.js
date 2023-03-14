// Author: Pradumn
// Published: 21 JUNE 2022

// List of words
var words = ['needle', 'different', 'snatch', 'cheat', 'earthy', 'thundering', 'silver', 'female', 'domineering', 'weather', 'snake', 'acrid', 'powder', 'elderly', 'alert', 'stem', 'miss', 'stale', 'delightful', 'greet', 'event', 'double', 'shirt', 'songs', 'ludicrous', 'bushes', 'drink', 'zealous', 'volcano', 'rabbit', 'strap', 'productive', 'noisy', 'reject', 'scrub', 'fair', 'natural', 'abiding', 'scared', 'agreeable', 'blow', 'ugliest', 'quickest', 'daffy', 'coast', 'chop', 'trail', 'mysterious', 'fat', 'bottle', 'dime', 'chubby', 'wacky', 'first', 'scream', 'cover', 'guide', 'control', 'absorbing', 'robust', 'mature', 'small', 'cloistered', 'forgetful', 'ring', 'reading', 'history', 'pray', 'sort', 'brawny', 'zesty', 'deranged', 'impartial', 'warm', 'questionable', 'imaginary', 'sassy', 'murder', 'ossified', 'development', 'whimsical', 'thrill', 'greedy', 'milk', 'subsequent', 'dam', 'spiders', 'mushy', 'jobless', 'ice', 'cable', 'force', 'launch', 'pan', 'steam', 'fire', 'outgoing', 'badge', 'arrange', 'laughable', 'deep', 'shock', 'peace', 'grateful', 'fry', 'decorate', 'pin', 'quiver', 'exotic', 'advice', 'teeth', 'hollow', 'jumpy', 'adjustment', 'porter', 'sore', 'glistening', 'perfect', 'cumbersome', 'handy', 'opposite', 'volleyball', 'meddle', 'rely', 'tall', 'thick', 'alcoholic', 'mix', 'eminent', 'land', 'alike', 'aboriginal', 'habitual', 'rampant', 'dog', 'automatic', 'station', 'dislike', 'tendency', 'quixotic', 'delicate', 'meat', 'recondite', 'ocean', 'cannon', 'sharp', 'substantial', 'laugh', 'rescue', 'river', 'creature', 'bulb', 'salty', 'troubled', 'excellent', 'spray', 'embarrassed', 'macho', 'crook', 'scrawny', 'unequal', 'steep', 'soda', 'guitar', 'popcorn', 'lighten', 'alive', 'employ', 'meaty', 'zany', 'door', 'astonishing', 'meal', 'punch', 'cynical', 'report', 'future', 'dashing', 'handsomely', 'please', 'flashy', 'attend', 'wicked', 'stupendous', 'teeny', 'steel', 'current', 'abashed', 'truculent', 'sun', 'pedal', 'overjoyed', 'actually', 'sin', 'wash', 'scientific', 'four', 'mitten', 'premium', 'remind', 'point', 'turn', 'sable', 'obese', 'flash', 'impulse', 'determined', 'stitch', 'rigid', 'jaded', 'holistic', 'fang', 'root', 'stick', 'liquid', 'horses', 'yak', 'dry', 'bite', 'dress', 'yawn', 'joke', 'act', 'week', 'thank', 'ready', 'slap', 'bubble', 'design', 'accessible', 'dinner', 'rings', 'elfin', 'reminiscent', 'curious', 'multiply', 'mourn', 'warlike', 'naive', 'friends', 'fireman', 'tie', 'tough', 'sleet', 'innocent', 'ground', 'birds', 'mate', 'doubtful', 'skip', 'pinch', 'healthy', 'picayune', 'tangible', 'boiling', 'kindly', 'groan', 'spade', 'festive', 'cultured', 'turkey', 'homeless', 'pen', 'omniscient', 'lunch', 'swift', 'exuberant', 'wilderness', 'useless', 'slimy', 'notebook', 'flowers', 'bucket', 'gray', 'foolish', 'wrathful', 'tame', 'untidy', 'increase', 'wonder', 'bait', 'delirious', 'lace', 'miscreant', 'freezing', 'open', 'long', 'helpless', 'injure', 'whirl', 'beds', 'redundant', 'moor', 'pointless', 'grey', 'lowly', 'power', 'energetic', 'half', 'damaged', 'rake', 'serve', 'blue', 'cream', 'obsolete', 'frightened', 'invite', 'immense', 'regret', 'thankful', 'planes', 'giant', 'contain', 'color', 'cry', 'overt', 'bore', 'allow', 'hurry', 'utter', 'matter', 'bath', 'stomach', 'expensive', 'clumsy', 'work', 'sense', 'shape', 'grieving', 'structure', 'influence', 'hug', 'bruise', 'crowd', 'unwritten', 'feigned', 'gratis', 'inquisitive', 'wound', 'glamorous', 'rule', 'voice', 'birthday', 'drab', 'cake', 'mundane', 'shelter', 'rush', 'camera', 'sigh', 'outstanding', 'touch', 'absorbed', 'pour', 'needless', 'ablaze', 'abusive', 'appreciate', 'flimsy', 'leather', 'unfasten', 'political', 'appliance', 'plot', 'jazzy', 'toy', 'judicious', 'motion', 'mammoth', 'ajar', 'languid', 'dinosaurs', 'signal', 'smelly', 'bashful', 'fanatical', 'travel', 'shoe', 'tricky', 'need', 'calculating', 'soak', 'busy', 'degree', 'request', 'record', 'hungry', 'judge', 'lively', 'vague', 'yummy', 'cook', 'legs', 'unbecoming', 'clam', 'simple', 'prose', 'lumpy', 'describe', 'correct', 'satisfy', 'penitent', 'rich', 'beef', 'floor', 'full', 'grain', 'suggest', 'vulgar', 'kick', 'inject', 'zinc', 'harass', 'shaky', 'rightful', 'horse', 'risk', 'brown', 'phone', 'scarecrow', 'company', 'loaf', 'sip', 'yellow', 'humor', 'fearful', 'ceaseless', 'applaud', 'depressed', 'uncovered', 'permit', 'cellar', 'hum', 'cheerful', 'cooing', 'narrow', 'cars', 'ethereal', 'third', 'plough', 'park', 'unruly', 'kindhearted', 'recognise', 'song', 'truthful', 'agonizing', 'towering', 'wren', 'escape', 'separate', 'farm', 'corn', 'fascinated', 'poison', 'defective', 'cuddly', 'obtain', 'famous', 'queen', 'murky', 'likeable', 'literate', 'license', 'tacky', 'day', 'division', 'unknown', 'afterthought', 'kitty', 'tire', 'shake', 'lip', 'oceanic', 'print', 'exercise', 'memory', 'aspiring', 'grip', 'dependent', 'aberrant', 'awake', 'dreary', 'memorize', 'plastic', 'perpetual', 'occur', 'battle', 'wreck', 'next', 'ball', 'offbeat', 'count', 'tasty', 'violent', 'purple', 'stew', 'naughty', 'stir', 'ruthless', 'grouchy', 'type', 'precious', 'plant', 'dynamic', 'notice', 'quilt', 'bright', 'perform', 'terrify', 'burly', 'branch', 'believe', 'mountain', 'abrupt', 'peck', 'staking', 'head', 'gentle', 'care', 'quaint', 'fluttering', 'children', 'adorable', 'efficient', 'wiggly', 'ink', 'cowardly', 'shelf', 'noiseless', 'harsh', 'gold', 'cobweb', 'creator', 'train', 'compete', 'sparkle', 'rock', 'nose', 'elegant', 'preserve', 'minor', 'meeting', 'authority', 'arrive', 'subtract', 'chin', 'aftermath', 'chalk', 'dysfunctional', 'bow', 'hushed', 'lonely', 'wait', 'weight', 'store', 'women', 'descriptive', 'fade', 'certain', 'hot', 'society', 'sleep', 'depend', 'neck', 'throat', 'damaging', 'roasted', 'underwear', 'eatable', 'bent', 'massive', 'abnormal', 'death', 'enchanting', 'husky', 'remember', 'muddled', 'gamy', 'jittery', 'charge', 'animal', 'dazzling', 'enjoy', 'animated', 'rare', 'peep', 'scarce', 'reply', 'soothe', 'callous', 'compare', 'bolt', 'waste', 'duck', 'amuse', 'deer', 'library', 'stop', 'romantic', 'abrasive', 'locket', 'false', 'possessive', 'homely', 'irate', 'anxious', 'laborer', 'button', 'minister', 'mouth', 'undesirable', 'scattered', 'babies', 'guarded', 'wobble', 'scandalous', 'craven', 'theory', 'supply', 'courageous', 'club', 'attack', 'hose', 'develop', 'handsome', 'partner', 'cracker', 'cluttered', 'way', 'relieved', 'hate', 'adhesive', 'yam', 'flight', 'flower', 'approval', 'smash', 'fixed', 'nervous', 'poke', 'plausible', 'milky', 'support', 'talk', 'past', 'mom', 'obsequious', 'distance', 'diligent', 'rain', 'sad', 'combative', 'switch', 'visit', 'wrench', 'plane', 'nice', 'military', 'cautious', 'boorish', 'foamy', 'gaping', 'elastic', 'reason', 'destroy', 'play', 'slip', 'pig', 'replace', 'heady', 'home', 'vein', 'messup', 'doctor', 'rob', 'blind', 'spectacular', 'observe', 'baseball', 'juicy', 'arrogant', 'heat', 'friction', 'grab', 'careful', 'clap', 'soup', 'cold', 'actor', 'organic', 'accidental', 'abounding', 'physical', 'boot', 'rapid', 'plate', 'prefer', 'zip', 'flame', 'bone', 'disgusted', 'choke', 'trouble', 'sugar', 'coat', 'filthy', 'kill', 'digestion', 'clean', 'guess', 'ants', 'dock', 'kittens', 'incandescent', 'crowded', 'umbrella', 'vegetable', 'valuable', 'embarrass', 'aboard', 'fear', 'kiss', 'post', 'infamous', 'help', 'concern', 'wall', 'draconian', 'cheese', 'complete', 'stuff', 'parsimonious', 'sophisticated', 'straw', 'grubby', 'scintillating', 'frequent', 'monkey', 'parallel', 'interest', 'march', 'sturdy', 'press', 'huge', 'horn', 'committee', 'new', 'stimulating', 'strip', 'hapless', 'cloth', 'short', 'nutty', 'near', 'bounce', 'steadfast', 'grandmother', 'crazy', 'smart', 'pollution', 'consist', 'camp', 'destruction', 'cushion', 'analyze', 'apparatus', 'ignore', 'lucky', 'fragile', 'telephone', 'squirrel', 'smile', 'oval', 'toes', 'push', 'tour', 'tug', 'nerve', 'seashore', 'found', 'classy', 'share', 'uttermost', 'basket', 'stone', 'letters', 'macabre', 'nebulous', 'leg', 'fallacious', 'fuzzy', 'war', 'business', 'cherry', 'deadpan', 'tender', 'excuse', 'scribble', 'calculator', 'sour', 'old', 'copper', 'confess', 'seat', 'reduce', 'hang', 'jealous', 'ten', 'space', 'intend', 'fresh', 'key', 'moan', 'respect', 'jagged', 'decorous', 'cough', 'church', 'tin', 'texture', 'glorious', 'stupid', 'null', 'guard', 'shiny', 'railway', 'permissible', 'doubt', 'tip', 'claim', 'tasteful', 'mice', 'ticket', 'coil', 'tiny', 'unsightly', 'sail', 'slave', 'versed', 'cat', 'drag', 'crack', 'fetch', 'brake', 'lazy', 'wink', 'nauseating', 'can', 'crime', 'red', 'name', 'apathetic', 'alleged', 'blushing', 'limping', 'fabulous', 'detailed', 'illegal', 'offend', 'voiceless', 'zephyr', 'curtain', 'rotten', 'conscious', 'vengeful', 'quarter', 'vast', 'delight', 'white', 'gleaming', 'egg', 'maniacal', 'room', 'remarkable', 'heal', 'wealth', 'zipper', 'pushy', 'awesome', 'daily', 'painstaking', 'used', 'adamant', 'secretary', 'sea', 'disgusting', 'pot', 'save', 'melodic', 'fact', 'night', 'back', 'vagabond', 'unkempt', 'polish', 'punish', 'wasteful', 'spiky', 'puzzling', 'rainstorm', 'jail', 'bells', 'saw', 'jump', 'relation', 'piquant', 'watery', 'instruct', 'ordinary', 'anger', 'robin', 'dead', 'squalid', 'amused', 'brief', 'wool', 'defiant', 'hissing', 'shy', 'magic', 'cure', 'icicle', 'shiver', 'debt', 'giants', 'useful', 'nosy', 'educated', 'spiteful', 'mere', 'spot', 'lunchroom', 'vessel', 'impossible', 'elite', 'error', 'plantation', 'jar', 'playground', 'inexpensive', 'tested', 'scorch', 'lopsided', 'caption', 'quick', 'match', 'rice', 'cloudy', 'rabbits', 'seed', 'sisters', 'stove', 'clip', 'eyes', 'material', 'adhoc', 'drunk', 'knowledgeable', 'zebra', 'wealthy', 'obnoxious', 'sign', 'glossy', 'meek', 'arch', 'food', 'carve', 'modern', 'fruit', 'representative', 'soft', 'hammer', 'attempt', 'buzz', 'unit', 'wood', 'money', 'slope', 'insect', 'giddy', 'abortive', 'flavor', 'hateful', 'free', 'measly', 'fool', 'itch', 'tease', 'pickle', 'cycle', 'explain', 'value', 'snobbish', 'loud', 'sticky', 'trot', 'pancake', 'godly', 'sick', 'self', 'furtive', 'snotty', 'confused', 'aromatic', 'cap', 'flood', 'raspy', 'sweltering', 'improve', 'aggressive', 'puny', 'copy', 'avoid', 'shrug', 'sniff', 'pleasant', 'royal', 'frail', 'strong', 'scold', 'crash', 'surround', 'dad', 'big', 'road', 'marvelous', 'behavior', 'school', 'card', 'trousers', 'downtown', 'drown', 'cabbage', 'instrument', 'flawless', 'silky', 'coherent', 'fertile', 'momentous', 'board', 'unadvised', 'boat', 'pail', 'furry', 'tooth', 'stare', 'spy', 'waves', 'price', 'calculate', 'verdant', 'toad', 'impolite', 'mailbox', 'youthful', 'juvenile', 'same', 'reign', 'glass', 'lacking', 'grease', 'trucks', 'deceive', 'adaptable', 'pump', 'longing', 'amuck', 'hospitable', 'haircut', 'hanging', 'ducks', 'wholesale', 'rebel', 'last', 'obedient', 'thinkable', 'reach', 'exclusive', 'cause', 'screeching', 'boring', 'tenuous', 'bomb', 'measure', 'woman', 'flap', 'acid', 'beneficial', 'angle', 'invention', 'uncle', 'puffy', 'periodic', 'ratty', 'unsuitable', 'mass', 'truck', 'encouraging', 'chivalrous', 'eggnog', 'retire', 'poor', 'dangerous', 'finger', 'use', 'tidy', 'messy', 'spotted', 'knee', 'spicy', 'rhyme', 'didactic', 'marked', 'feeble', 'guttural', 'alarm', 'lame', 'owe', 'winter', 'peaceful', 'puncture', 'breathe', 'sparkling', 'tub', 'snails', 'treatment', 'metal', 'finicky', 'interesting', 'previous', 'pumped', 'probable', 'better', 'list', 'weary', 'class', 'inform', 'early', 'wonderful', 'order', 'powerful', 'birth', 'achiever', 'pat', 'breath', 'misty', 'worried', 'rough', 'juice', 'air', 'oranges', 'understood', 'faithful', 'cats', 'statuesque', 'pets', 'burst', 'decisive', 'clammy', 'zippy', 'hook', 'range', 'wrong', 'greasy', 'fortunate', 'suffer', 'tumble', 'spark', 'loss', 'watch', 'married', 'jellyfish', 'paint', 'whine', 'blood', 'flow', 'abhorrent', 'water', 'thoughtless', 'bless', 'happen', 'belief', 'attractive', 'functional', 'highfalutin', 'ripe', 'quizzical', 'envious', 'time', 'wriggle', 'labored', 'nest', 'include', 'hand', 'tray', 'bat', 'colorful', 'argue', 'paddle', 'giraffe', 'whip', 'mend', 'irritating', 'tearful', 'entertaining', 'plants', 'heap', 'nonchalant', 'overrated', 'acoustic', 'bang', 'exchange', 'flesh', 'command', 'right', 'male', 'lethal', 'unhealthy', 'ugly', 'luxuriant', 'rinse', 'riddle', 'psychedelic', 'afraid', 'flippant', 'communicate', 'bike', 'superb', 'bizarre', 'crooked', 'magnificent', 'abundant', 'wipe', 'deeply', 'disappear', 'lavish', 'broad', 'treat', 'heavenly', 'tacit', 'route', 'kind', 'disagreeable', 'summer', 'horrible', 'nut', 'burn', 'introduce', 'fork', 'delay', 'resonant', 'thaw', 'necessary', 'frightening', 'spare', 'colossal', 'writing', 'basin', 'quack', 'earthquake', 'frog', 'van', 'hurt', 'known', 'observation', 'capricious', 'concerned', 'dolls', 'advertisement', 'shave', 'medical', 'handle', 'scare', 'desert', 'whistle', 'queue', 'cart', 'wry', 'repulsive', 'decide', 'graceful', 'cheer', 'nine', 'squealing', 'tickle', 'joyous', 'direction', 'rude', 'hunt', 'oil', 'erratic', 'true', 'mask', 'year', 'cool', 'special', 'scratch', 'satisfying', 'stream', 'crabby', 'holiday', 'toothsome', 'squeak', 'realize', 'cup', 'attract', 'lamentable', 'marry', 'bag', 'disturbed', 'safe', 'odd', 'grade', 'afternoon', 'rambunctious', 'solid', 'disapprove', 'resolute', 'weigh', 'sock', 'brainy', 'precede', 'private', 'tasteless', 'sand', 'crawl', 'tired', 'bored', 'cakes', 'agreement', 'cruel', 'icky', 'tawdry', 'invincible', 'desire', 'rat', 'successful', 'temper', 'intelligent', 'growth', 'beautiful', 'spooky', 'rose', 'month', 'poised', 'servant', 'witty', 'dark', 'wire', 'end', 'undress', 'idea', 'toys', 'outrageous', 'unique', 'bear', 'mute', 'black', 'unused', 'friend', 'canvas', 'unable', 'incredible', 'weak', 'grate', 'arithmetic', 'complex', 'excite', 'disastrous', 'fuel', 'men', 'charming', 'country', 'morning', 'quicksand', 'activity', 'account', 'sink', 'flat', 'insidious', 'pigs', 'enthusiastic', 'excited', 'receptive', 'eye', 'fearless', 'wind', 'crown', 'cows', 'many', 'uneven', 'pine', 'common', 'unusual', 'serious', 'tomatoes', 'jeans', 'vigorous', 'shoes', 'trade', 'bedroom', 'painful', 'temporary', 'receive', 'tank', 'good', 'sneeze', 'synonymous', 'daughter', 'snakes', 'stiff', 'belligerent', 'coordinated', 'action', 'mine', 'savory', 'dear', 'snail', 'worm', 'sky', 'scene', 'pull', 'flock', 'island', 'halting', 'pleasure', 'ban', 'funny', 'geese', 'cherries', 'faulty', 'system', 'language', 'elbow', 'flagrant', 'extend', 'thin', 'vase', 'ragged', 'size', 'comparison', 'verse', 'crayon', 'smoke', 'squeamish', 'suspect', 'stormy', 'blink', 'placid', 'trains', 'divide', 'quirky', 'historical', 'army', 'transport', 'brush', 'aback', 'creepy', 'various', 'high', 'provide', 'chew', 'therapeutic', 'difficult', 'credit', 'practice', 'broken', 'glib', 'drop', 'accept', 'ambiguous', 'paste', 'twist', 'boundless', 'border', 'minute', 'closed', 'discovery', 'vivacious', 'gorgeous', 'discussion', 'optimal', 'even', 'roll', 'welcome', 'rejoice', 'sack', 'whispering', 'borrow', 'girl', 'girls', 'addicted', 'ladybug', 'succeed', 'distribution', 'low', 'supreme', 'invent', 'drum', 'knowing', 'houses', 'hole', 'steer', 'lean', 'light', 'unaccountable', 'building', 'glove', 'carry', 'disarm', 'apologise', 'mist', 'grin', 'one', 'trashy', 'wild', 'science', 'cattle', 'gabby', 'dogs', 'scissors', 'trace', 'skinny', 'plain', 'unarmed', 'tick', 'mountainous', 'experience', 'book', 'insurance', 'discreet', 'willing', 'slow', 'suck', 'passenger', 'terrific', 'pencil', 'wistful', 'religion', 'table', 'wander', 'abstracted', 'venomous', 'offer', 'arm', 'warn', 'doll', 'rhythm', 'taboo', 'cooperative', 'deafening', 'shocking', 'wary', 'uninterested', 'gusty', 'overconfident', 'bake', 'panoramic', 'polite', 'cross', 'hard', 'assorted', 'reaction', 'honorable', 'wandering', 'substance', 'overflow', 'statement', 'spurious', 'own', 'neat', 'caring', 'pastoral', 'ignorant', 'sister', 'concentrate', 'nonstop', 'ear', 'brick', 'middle', 'pricey', 'plucky', 'example', 'salt', 'shrill', 'noxious', 'wretched', 'box', 'pocket', 'pick', 'breakable', 'succinct', 'addition', 'yoke', 'faint', 'simplistic', 'refuse', 'pie', 'shallow', 'deliver', 'discover', 'economic', 'pathetic', 'incompetent', 'detail', 'crib', 'mean', 'property', 'cow', 'adventurous', 'smoggy', 'exultant', 'chess', 'blot', 'mighty', 'level', 'afford', 'repair', 'tent', 'victorious', 'squeeze', 'wail', 'suit', 'join', 'waiting', 'curl', 'quince', 'happy', 'base', 'announce', 'edge', 'three', 'run', 'hideous', 'collect', 'arrest', 'public', 'super', 'quiet', 'look', 'house', 'note', 'pack', 'wave', 'chief', 'existence', 'enter', 'tense', 'grumpy', 'quartz', 'belong', 'equal', 'pretend', 'wet', 'slippery', 'raise', 'step', 'jelly', 'love', 'vacuous', 'foot', 'upset', 'sweater', 'boast', 'skate', 'purpose', 'tax', 'cactus', 'pies', 'sprout', 'zoo', 'receipt', 'itchy', 'expansion', 'impress', 'beam', 'ubiquitous', 'tail', 'thread', 'drain', 'bell', 'fasten', 'bit', 'hysterical', 'legal', 'snore', 'garrulous', 'goofy', 'moon', 'chase', 'ahead', 'wheel', 'town', 'ship', 'sofa', 'somber', 'listen', 'jolly', 'plan', 'label', 'trees', 'educate', 'person', 'nutritious', 'aloof', 'fix', 'cheap', 'instinctive', 'story', 'adjoining', 'childlike', 'hope', 'tiger', 'acoustics', 'try', 'abaft', 'wakeful', 'man', 'apparel', 'annoyed', 'parcel', 'cut', 'mind', 'tight', 'group', 'torpid', 'coach', 'alluring', 'sloppy', 'moldy', 'wax', 'tempt', 'ray', 'reproduce', 'fence', 'obeisant', 'nimble', 'harmonious', 'acidic', 'bitter', 'scary', 'seal', 'remain', 'channel', 'grape', 'check', 'evasive', 'ashamed', 'typical', 'dull', 'zonked', 'visitor', 'lettuce', 'stage', 'hypnotic', 'vest', 'hulking', 'hands', 'talented', 'bare', 'admire', 'field', 'woebegone', 'nasty', 'great', 'fantastic', 'obscene', 'wing', 'helpful', 'hat', 'comfortable', 'promise', 'advise', 'confuse', 'live', 'strange', 'silent', 'fumbling', 'ask', 'numerous', 'suspend', 'nondescript', 'crate', 'throne', 'twig', 'rail', 'bridge', 'voracious', 'large', 'barbarous', 'marble', 'amount', 'harbor', 'prick', 'wide', 'fierce', 'bumpy', 'chicken', 'disillusioned', 'soggy', 'mother', 'clover', 'disagree', 'secretive', 'rural', 'territory', 'thoughtful', 'worry', 'profit', 'wanting', 'innate', 'lovely', 'office', 'smiling', 'governor', 'rustic', 'moaning', 'little', 'balance', 'ski', 'guiltless', 'magical', 'stay', 'bloody', 'able', 'sudden', 'clever', 'spiritual', 'humorous', 'bustling', 'punishment', 'woozy', 'oafish', 'sulky', 'slim', 'imported', 'humdrum', 'stranger', 'object', 'paltry', 'fax', 'green', 'zoom', 'exist', 'gun', 'picture', 'party', 'testy', 'calm', 'deserted', 'return', 'thirsty', 'examine', 'fluffy', 'berserk', 'detect', 'nappy', 'produce', 'unlock', 'seemly', 'general', 'efficacious', 'enchanted', 'hesitant', 'drawer', 'utopian', 'jumbled', 'pretty', 'add', 'relax', 'number', 'devilish', 'stocking', 'baby', 'carpenter', 'sidewalk', 'north', 'coal', 'wooden', 'things', 'engine', 'demonic', 'earn', 'sheep', 'trap', 'health', 'answer', 'hill', 'acceptable', 'muscle', 'drip', 'star', 'melted', 'mint', 'blush', 'dirt', 'amusement', 'unwieldy', 'stingy', 'enormous', 'dramatic', 'admit', 'late', 'hair', 'waggish', 'start', 'expert', 'cemetery', 'shivering', 'protect', 'striped', 'dirty', 'spell', 'title', 'brash', 'possible', 'wish', 'tan', 'makeshift', 'lake', 'window', 'flag', 'crow', 'reflective', 'illustrious', 'race', 'gigantic', 'snow', 'roof', 'roomy', 'writer', 'easy', 'shut', 'toe', 'sound', 'muddle', 'gate', 'imperfect', 'fit', 'knot', 'loving', 'hallowed', 'kettle', 'absurd', 'test', 'faded', 'blade', 'boil', 'load', 'eggs', 'boundary', 'approve', 'skillful', 'ritzy', 'telling', 'responsible', 'gruesome', 'bathe', 'bump', 'machine', 'irritate', 'brother', 'panicky', 'tedious', 'behave', 'teaching', 'furniture', 'magenta', 'careless', 'interrupt', 'potato', 'protective', 'pipe', 'round', 'sponge', 'equable', 'taste', 'want', 'mellow', 'imminent', 'normal', 'knit'];

var string = '';
var userString = '';
var charItr = 0;
var htmlItr = 0;
var totalChar = 0;
var correctChar = 0;
var call = 1;
var seconds = 60;
var uncorrectedErrors = 0;

// functions

//function to generate radnom words
function generateRandomWords() {
  string = '';
  for (var i = 0; i < 30; i++) {
    string += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  $(".text").text(string);
  charItr = 0;
  htmlItr = 0;
}

// function to wrap a char in green span
function greenSpan(char) {
  var greenSpanHtml = "<span class='green'>" + char + "</span>";
  htmlItr += greenSpanHtml.length;
  return greenSpanHtml;
}

// function to wrap a char in red span
function redSpan(char) {
  var redSpanHtml = "<span class='red'>" + char + "</span>";
  htmlItr += redSpanHtml.length;
  return redSpanHtml;
}

// function for backspace operation

function backspace() {
  if (charItr > 0) {
    charItr--;
    var currentHtml = $(".text").html();
    if (currentHtml[htmlItr - 11] === 'n') {
      htmlItr -= 28;
    } else {
      uncorrectedErrors--;
      htmlItr -= 26;
    }
    var updatedHtml = currentHtml.slice(0, htmlItr) + "<div class='cursor'> </div>" + string[charItr] + string.slice(charItr + 1, string.length);
    $(".text").html(updatedHtml);
    cursorAnimation();
  }

}

// function for cursor Animation

function cursorAnimation() {
  $(".cursor").animate({
    opacity: "0"
  }, 400).animate({
    opacity: "1"
  }, 400, cursorAnimation);
}

// function for countdown

function countdown() {
  setTimeout(function() {
    seconds--;
    $(".countdown").text("0 : " + seconds.toString() + " min");
    countdown();
  }, 1000);

}

//function for logo Animation

function logoAnimation() {
  if (i < logoName.length) {
    toBeDisplayed += logoName[i++];
    $(".logo").html(toBeDisplayed + "<div class='logoCursor'></div>");
    logoCursorAnimation();
    setTimeout(logoAnimation, 500);
  } else {
    setTimeout(function() {
      $(".logoCursor").remove();
    }, 2000);

  }
}

// function for logo cursor animation

function logoCursorAnimation() {
  $(".logoCursor").animate({
    opacity: "0"
  }, 400).animate({
    opacity: "1"
  }, 400, logoCursorAnimation);
}




// active page is home
$(".home").addClass("active");

//generate random words and put it in html.
generateRandomWords();

// when key is pressed do this stuff
$("body").on("keydown", function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 32 || event.keyCode === 8) {
    if (call) {
      countdown();
      setTimeout(function() //remove typing area and add results
        {
          $(".typing-area").remove();
          $(".navibar").after('<div class="container"><div class="accuracy card"><h1 class="card-header">Accuracy</h1><p class="card-text"></p></div><div class="speed card"><h1 class="card-header">Raw Speed</h1><p class="card-text"></p></div><div class="wpm card"><h1 class="card-header">Net Wpm</h1><p class="card-text"></p></div><div class="cpm card"><h1 class="card-header"> CPM</h1><p class="card-text"></p></div><div>');
          $(".container").after('<a href="index.html" class="try-again"><i class="fa-solid fa-arrow-rotate-right"></i></a>');
          VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1
          });
          // set results in the cards
          var accuracy = Math.round((correctChar / totalChar) * 100);
          var grossSpeed = Math.round(totalChar / 5);
          var netWpm = grossSpeed - uncorrectedErrors;
          $(".accuracy p").text(accuracy.toString() + " %");
          $(".speed p").text(grossSpeed.toString() + " wpm");
          $(".wpm p").text(netWpm.toString() + " wpm");
          $(".cpm p").text(totalChar.toString() + " cpm");
        }, 60000);
      call = 0;
    }

    const userTypedChar = event.key;
    if (userTypedChar === "Backspace") {
      backspace();
    } else {
      totalChar++;
      if (userTypedChar === string[charItr]) // if correct character is typed color it to green.
      {
        correctChar++;
        var currentHtml = $(".text").html();
        var updatedHtml = currentHtml.slice(0, htmlItr) + greenSpan(userTypedChar) + "<div class='cursor'> </div>" + string.slice(charItr + 1, string.length);
        $(".text").html(updatedHtml);
        charItr++;

      } else // if wrong character is typed color it to red.
      {
        uncorrectedErrors++;
        var currentHtml = $(".text").html();
        var updatedHtml = currentHtml.slice(0, htmlItr) + redSpan(string[charItr]) + "<div class='cursor'> </div>" + string.slice(charItr + 1, string.length);
        $(".text").html(updatedHtml);
        charItr++;
      }
      cursorAnimation(); // activate cursor animation
      if (charItr == string.length) {
        generateRandomWords(); // when the string is completed generate another string
      }
    }
  }
});

// logo animation

var logoName = "Quick Type Test";
var toBeDisplayed = "";
var i = 0;
setTimeout(
  function() {
    logoAnimation();
  }, 1000);

// dynamic copyright year

const date = new Date();
$(".date").html(date.getFullYear());
